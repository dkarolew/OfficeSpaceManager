package agh.osm.api.place;

import agh.osm.api.reservation.Reservation;
import agh.osm.api.reservation.ReservationRepository;
import agh.osm.api.reservation.ReservationService;
import agh.osm.api.reservation.ReservationWsm;
import agh.osm.api.user.User;
import agh.osm.api.user.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class PlaceService {
    private final PlaceRepository placeRepository;
    private final ReservationRepository reservationRepository;
    private final ReservationService reservationService;
    private final UserRepository userRepository;

    public PlaceService(PlaceRepository placeRepository, ReservationRepository reservationRepository, ReservationService reservationService, UserRepository userRepository) {
        this.placeRepository = placeRepository;
        this.reservationRepository = reservationRepository;
        this.reservationService = reservationService;
        this.userRepository = userRepository;
    }

    public List<Place> getPlaces() {
        return placeRepository.getAllPlaceForSector();
    }

    public List<Place> getPlacesInDate(String date) {
        List<Place> places = placeRepository.getAllPlaceForSector();
        List<Reservation> reservations = reservationRepository.findAll();
        List<Long> changedPlaces = new ArrayList<>();

        for (Reservation reservation : reservations) {
            if (placeRepository.getPlaceById(reservation.getPlaceId()).getState() != PlaceState.DISABLED) {
                if (isWithinRange(LocalDate.parse(date), reservation.getDateStart(), reservation.getDateEnd())) {
                    placeRepository.update(reservation.getPlaceId(), PlaceState.BUSY);

                    places.stream()
                            .filter(p -> p.getId().equals(reservation.getPlaceId()))
                            .forEach(p -> p.setState(PlaceState.BUSY));
                    changedPlaces.add(reservation.getPlaceId());
                } else {
                    if (!changedPlaces.contains(reservation.getPlaceId())) {
                        placeRepository.update(reservation.getPlaceId(), PlaceState.FREE);

                        places.stream()
                                .filter(p -> p.getId().equals(reservation.getPlaceId()))
                                .forEach(p -> p.setState(PlaceState.FREE));
                    }
                }
            }
        }

        return places;
    }

    public void updatePlace(String place) {
        long placeNumber = Long.parseLong(place.substring(1));
        String placeType = getPlaceType(place).getType();
        long placeId = placeRepository.getIdForGivenPlace(placeNumber, placeType);
        Place p = placeRepository.getPlaceById(placeId);

        if (p.getState().equals(PlaceState.FREE)) {
            placeRepository.update(placeId, PlaceState.DISABLED);
        }
        if (p.getState().equals(PlaceState.DISABLED)) {
            placeRepository.update(placeId, PlaceState.FREE);
        }
    }

    public void intelligentReservation(PlacePositionListWsm placePositionListWsm) {
        Long userId = placePositionListWsm.getUserId();
        String date = placePositionListWsm.getDate();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate localDate = LocalDate.parse(date, formatter);
        List<PlacePositionWsm> placePositionList = placePositionListWsm.getPlacePositionList();
        String fromDate = localDate.minusDays(1).format(formatter);
        String toDate = localDate.plusDays(1).format(formatter);
        long sectorId = getSectorId(placePositionList);
        Long teamId = userRepository.findById(userId)
                .get()
                .getTeamId();
        List<Long> usersIdsInTeam = userRepository.findAll()
                .stream()
                .filter(u -> u.getTeamId().equals(teamId))
                .map(User::getId)
                .collect(Collectors.toList());
        List<Long> placeIdsInTeam = reservationRepository.findAll()
                .stream()
                .filter(r -> usersIdsInTeam.contains(r.getUserId()))
                .map(Reservation::getPlaceId)
                .collect(Collectors.toList());
        List<String> placesInTeam = placeRepository.getAllPlaceForSector()
                .stream()
                .filter(p -> placeIdsInTeam.contains(p.getId()))
                .filter(p -> p.getType() == PlaceType.DESK)
                .filter(p -> p.getSectorId().equals(sectorId))
                .map(p -> "P" + p.getNumber())
                .collect(Collectors.toList());

        List<String> freeRooms = placeRepository.getAllPlaceForSector()
                .stream()
                .filter(r -> r.getState() == PlaceState.FREE)
                .filter(r -> r.getType() == PlaceType.ROOM)
                .filter(r -> r.getSectorId().equals(sectorId))
                .map(r -> "R" + r.getNumber())
                .collect(Collectors.toList());

        if (freeRooms.isEmpty()) {
            return;
        }

        Map<String, Position> roomMap = new HashMap<>();
        Map<String, Position> deskMap = new HashMap<>();
        for (PlacePositionWsm p : placePositionList) {
            if (freeRooms.contains(p.getPlace())) {
                roomMap.put(p.getPlace(), new Position(p.getX(), p.getY()));
            }
            if (placesInTeam.contains(p.getPlace())) {
                deskMap.put(p.getPlace(), new Position(p.getX(), p.getY()));
            }
        }

        String chosenPlace = "";
        int minDistance = Integer.MAX_VALUE;
        for (Map.Entry<String, Position> room : roomMap.entrySet()) {
            int dist = 0;
            for (Map.Entry<String, Position> desk : deskMap.entrySet()) {
                dist += distance(room.getValue().getX(), room.getValue().getY(), desk.getValue().getX(), desk.getValue().getY());
            }
            if (dist < minDistance) {
                minDistance = dist;
                chosenPlace = room.getKey();
            }
        }

        ReservationWsm reservationWsm = new ReservationWsm(userId, chosenPlace, fromDate, toDate, Collections.emptyList(), false);
        reservationService.createReservation(reservationWsm);
    }

    PlaceType getPlaceType(String place) {
        return place.startsWith("P") ? PlaceType.DESK : PlaceType.ROOM;
    }

    boolean isWithinRange(LocalDate date, LocalDate start, LocalDate end) {
        return date.isAfter(start) && date.isBefore(end);
    }

    int distance(int x1, int y1, int x2, int y2) {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }

    long getSectorId(List<PlacePositionWsm> placePositionList) {
        String firstPlace = placePositionList.get(0).getPlace();

        if (firstPlace.length() <= 3) {
            return 99;
        }

        return Character.getNumericValue(firstPlace.charAt(1));
    }
}

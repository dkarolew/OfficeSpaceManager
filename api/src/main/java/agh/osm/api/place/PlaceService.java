package agh.osm.api.place;

import agh.osm.api.reservation.Reservation;
import agh.osm.api.reservation.ReservationRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class PlaceService {
    private final PlaceRepository placeRepository;
    private final ReservationRepository reservationRepository;

    public PlaceService(PlaceRepository placeRepository, ReservationRepository reservationRepository) {
        this.placeRepository = placeRepository;
        this.reservationRepository = reservationRepository;
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

    PlaceType getPlaceType(String place) {
        return place.startsWith("P") ? PlaceType.DESK : PlaceType.ROOM;
    }

    boolean isWithinRange(LocalDate date, LocalDate start, LocalDate end) {
        return date.isAfter(start) && date.isBefore(end);
    }
}

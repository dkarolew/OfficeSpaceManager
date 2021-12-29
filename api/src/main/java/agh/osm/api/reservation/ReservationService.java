package agh.osm.api.reservation;

import agh.osm.api.email.EmailMessage;
import agh.osm.api.email.EmailService;
import agh.osm.api.equipment.Equipment;
import agh.osm.api.equipment.EquipmentRepository;
import agh.osm.api.equipment.EquipmentType;
import agh.osm.api.equipment.EquipmentWsm;
import agh.osm.api.place.*;
import agh.osm.api.team.Team;
import agh.osm.api.team.TeamRepository;
import agh.osm.api.user.User;
import agh.osm.api.user.UserRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReservationService {
    private final ReservationRepository reservationRepository;
    private final EquipmentRepository equipmentRepository;
    private final PlaceRepository placeRepository;
    private final TeamRepository teamRepository;
    private final UserRepository userRepository;
    private final EmailService emailService;

    public ReservationService(ReservationRepository reservationRepository, EquipmentRepository equipmentRepository, PlaceRepository placeRepository, TeamRepository teamRepository, UserRepository userRepository, EmailService emailService) {
        this.reservationRepository = reservationRepository;
        this.equipmentRepository = equipmentRepository;
        this.placeRepository = placeRepository;
        this.teamRepository = teamRepository;
        this.userRepository = userRepository;
        this.emailService = emailService;
    }

    public List<Reservation> getReservations() {
        return reservationRepository.findAll();
    }

    @Transactional
    public void createReservation(ReservationWsm reservationWsm) {
        final var place = reservationWsm.getPlace();
        final var fromDate = LocalDate.parse(reservationWsm.getFromDate());
        final var toDate = LocalDate.parse(reservationWsm.getToDate());
        final var equipments = reservationWsm.getEquipment()
                .stream()
                .map(EquipmentWsm::getType)
                .collect(Collectors.toList());
        final var reminderEmail = reservationWsm.getReminderEmail();

        String placeType = getPlaceType(place).getType();
        long placeNumber = Long.parseLong(place.substring(1));
        long placeId = placeRepository.getIdForGivenPlace(placeNumber, placeType);

        if (placeRepository.getPlaceById(placeId).getState() == PlaceState.BUSY ||
                placeRepository.getPlaceById(placeId).getState() == PlaceState.DISABLED) {
            throw new PlaceBusyException(String.format("Place with id %d is busy", placeId));
        }

        Reservation r = reservationRepository.save(new Reservation(fromDate, toDate, 1L, placeId, reminderEmail));
        placeRepository.update(placeId, PlaceState.BUSY);
        insertEquipment(equipments, placeId, r.getId());

        if (reminderEmail) {
            EmailMessage emailMessage = new EmailMessage("dawid.karolewski97@gmail.com", "Title", "Content...");
            emailService.sendEmail(emailMessage);
        }
    }

    @Transactional
    public void updateReservation(ReservationWsm reservationWsm, Long reservationId) {
        final var place = reservationWsm.getPlace();
        final var fromDate = LocalDate.parse(reservationWsm.getFromDate());
        final var toDate = LocalDate.parse(reservationWsm.getToDate());
        final var equipments = reservationWsm.getEquipment()
                .stream()
                .map(EquipmentWsm::getType)
                .collect(Collectors.toList());
        final var reminderEmail = reservationWsm.getReminderEmail();

        Reservation r = reservationRepository.getById(reservationId);
        r.setDateStart(fromDate);
        r.setDateEnd(toDate);
        r.setRemainderEmail(reminderEmail);
    }

    @Transactional
    public void deleteReservation(Long reservationId) {
        equipmentRepository.findAll()
                .stream()
                .filter(eq -> eq.getReservationId().equals(reservationId))
                .collect(Collectors.toList())
                .forEach(eq -> equipmentRepository.deleteById(eq.getId()));
        Reservation r = reservationRepository.getById(reservationId);
        placeRepository.update(r.getPlaceId(), PlaceState.FREE);
        reservationRepository.deleteById(reservationId);
    }

    public ReservationDetailsWsm getReservationDetails(Long reservationId) {
        Reservation reservation = reservationRepository.getById(reservationId);
        Place place = placeRepository.getPlaceById(reservation.getPlaceId());
        User user = userRepository.getById(reservation.getUserId());
        Team team = teamRepository.getById(user.getTeamId());

        String placeInfo = place.getType() + place.getNumber();
        return new ReservationDetailsWsm(placeInfo, team.getName(), reservation.isReminderEmail());
    }

    private PlaceType getPlaceType(String place) {
        return place.startsWith("P") ? PlaceType.DESK : PlaceType.ROOM;
    }

    private void insertEquipment(List<EquipmentType> equipments, Long placeId, Long reservationId) {
        equipments.forEach(eq -> equipmentRepository.save(new Equipment(eq.getType(), placeId, reservationId)));
    }
}

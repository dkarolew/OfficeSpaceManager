package agh.osm.api.reservation;

import agh.osm.api.email.EmailMessage;
import agh.osm.api.email.EmailService;
import agh.osm.api.equipment.EquipmentWsm;
import agh.osm.api.team.Team;
import agh.osm.api.team.TeamRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReservationService {
    private final ReservationRepository reservationRepository;
    private final TeamRepository teamRepository;
    private final EmailService emailService;

    public ReservationService(ReservationRepository reservationRepository, TeamRepository teamRepository, EmailService emailService) {
        this.reservationRepository = reservationRepository;
        this.teamRepository = teamRepository;
        this.emailService = emailService;
    }

    public List<Reservation> getReservations() {
        return reservationRepository.findAll();
    }

    public void createReservation(ReservationWsm reservationWsm) {
        final var teamCode = reservationWsm.getTeamCode();
        final var date = LocalDate.parse(reservationWsm.getDate());
        final var equipment = reservationWsm.getEquipment()
                .stream()
                .map(EquipmentWsm::getType)
                .collect(Collectors.toList());
        final var reminderEmail = reservationWsm.getReminderEmail();

        teamRepository.save(new Team(teamCode, 1L));

        if (reminderEmail) {
            EmailMessage emailMessage = new EmailMessage("dawid.karolewski97@gmail.com", "Title", "Content...");
            emailService.sendEmail(emailMessage);
        }
    }
}

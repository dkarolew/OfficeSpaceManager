package agh.osm.api.user;

import agh.osm.api.email.EmailContentGenerator;
import agh.osm.api.email.EmailMessage;
import agh.osm.api.email.EmailService;
import agh.osm.api.equipment.Equipment;
import agh.osm.api.equipment.EquipmentRepository;
import agh.osm.api.reservation.Reservation;
import agh.osm.api.reservation.ReservationRepository;
import agh.osm.api.role.RoleType;
import agh.osm.api.security.AuthenticationProvider;
import agh.osm.api.team.Team;
import agh.osm.api.team.TeamRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final TeamRepository teamRepository;
    private final ReservationRepository reservationRepository;
    private final EquipmentRepository equipmentRepository;
    private final EmailService emailService;

    public UserService(UserRepository userRepository, TeamRepository teamRepository, ReservationRepository reservationRepository, EquipmentRepository equipmentRepository, EmailService emailService) {
        this.userRepository = userRepository;
        this.teamRepository = teamRepository;
        this.reservationRepository = reservationRepository;
        this.equipmentRepository = equipmentRepository;
        this.emailService = emailService;
    }

    public List<User> getUsers() {
        return userRepository.findAll()
                .stream()
                .map(u -> new User(u.getId(), u.getFirstName(), u.getLastName(), u.getEmail(),
                        u.getTeamId(), u.getRole(), "", u.getExpirationDate()))
                .collect(Collectors.toList());
    }

    @Transactional
    public void addUser(UserWsm userWsm) {
        String firstName = userWsm.getFirstName();
        String lastName = userWsm.getLastName();
        String email = userWsm.getEmail();
        String teamCode = userWsm.getTeamCode();
        String rawPassword = userWsm.getPassword();
        String encodedPassword = AuthenticationProvider.encode(rawPassword);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate expirationDate = LocalDate.parse(userWsm.getExpirationDate(), formatter);

        Team team;

        if (!isTeamCodeExist(teamCode)) {
            team = teamRepository.save(new Team(teamCode));
        } else {
            team = getTeamByTeamCode(teamCode);
        }

        userRepository.save(new User(firstName, lastName, email, team.getId(), RoleType.USER.getType(), encodedPassword, expirationDate));

        EmailMessage emailMessage = EmailContentGenerator.generateCreateAccountEmailMessage(firstName, email, rawPassword);
        emailService.sendEmail(emailMessage);
    }

    @Transactional
    public void removeUser(Long userId) {
        User user = userRepository.getById(userId);
        List<Reservation> reservationToDelete = reservationRepository.findAll()
                .stream()
                .filter(r -> r.getUserId().equals(user.getId()))
                .collect(Collectors.toList());
        List<Long> reservationToDeleteIds = reservationToDelete.stream()
                .map(Reservation::getId)
                .collect(Collectors.toList());
        List<Equipment> equipmentToDelete = equipmentRepository.findAll()
                .stream()
                .filter(eq -> reservationToDeleteIds.contains(eq.getReservationId()))
                .collect(Collectors.toList());
        boolean wasLastUserInTeam = teamRepository.findAll()
                .stream()
                .allMatch(team -> team.getId().equals(user.getTeamId()));

        equipmentToDelete.forEach(eq -> equipmentRepository.deleteById(eq.getId()));
        reservationToDelete.forEach(r -> reservationRepository.deleteById(r.getId()));
        if (wasLastUserInTeam) {
            teamRepository.deleteById(user.getTeamId());
        }
        userRepository.deleteById(userId);
    }

    private Team getTeamByTeamCode(String teamCode) {
        return teamRepository.findAll()
                .stream()
                .filter(team -> team.getName().equals(teamCode))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Team does not exist"));
    }

    private boolean isTeamCodeExist(String teamCode) {
        return teamRepository.findAll()
                .stream()
                .anyMatch(team -> team.getName().equals(teamCode));
    }
}

package agh.osm.api.user;

import agh.osm.api.email.EmailContentGenerator;
import agh.osm.api.email.EmailMessage;
import agh.osm.api.email.EmailService;
import agh.osm.api.role.RoleType;
import agh.osm.api.security.AuthenticationProvider;
import agh.osm.api.team.Team;
import agh.osm.api.team.TeamRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final TeamRepository teamRepository;
    private final EmailService emailService;

    public UserService(UserRepository userRepository, TeamRepository teamRepository, EmailService emailService) {
        this.userRepository = userRepository;
        this.teamRepository = teamRepository;
        this.emailService = emailService;
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Transactional
    public void addUser(UserWsm userWsm) {
        String firstName = userWsm.getFirstName();
        String lastName = userWsm.getLastName();
        String email = userWsm.getEmail();
        String teamCode = userWsm.getTeamCode();
        String rawPassword = userWsm.getPassword();
        String encodedPassword = AuthenticationProvider.encode(rawPassword);

        Team team;

        if (!isTeamCodeExist(teamCode)) {
            team = teamRepository.save(new Team(teamCode));
        } else {
            team = getTeamByTeamCode(teamCode);
        }

        userRepository.save(new User(firstName, lastName, email, team.getId(), RoleType.USER.getType(), encodedPassword));

        EmailMessage emailMessage = EmailContentGenerator.generateCreateAccountEmailMessage(firstName, email, rawPassword);
        emailService.sendEmail(emailMessage);
    }

    @Transactional
    public void removeUser(Long userId) {
        User user = userRepository.getById(userId);
        boolean wasLastUserInTeam = teamRepository.findAll()
                .stream()
                .allMatch(team -> team.getId().equals(user.getTeamId()));

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

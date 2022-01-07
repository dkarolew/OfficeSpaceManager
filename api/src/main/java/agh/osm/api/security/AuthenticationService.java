package agh.osm.api.security;

import agh.osm.api.team.TeamRepository;
import agh.osm.api.user.User;
import agh.osm.api.user.UserRepository;
import agh.osm.api.user.UserWsm;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    private final UserRepository userRepository;
    private final TeamRepository teamRepository;

    public AuthenticationService(UserRepository userRepository, TeamRepository teamRepository) {
        this.userRepository = userRepository;
        this.teamRepository = teamRepository;
    }

    public UserWsm login(LoginWsm loginWsm) {
        String inputLogin = loginWsm.getLogin();
        String inputPassword = loginWsm.getPassword();

        User user = userRepository.findAll().stream()
                .filter(u -> u.getEmail().equals(inputLogin))
                .findFirst()
                .orElseThrow(() -> new RuntimeException(String.format("User with %s login does not exist", inputLogin)));

        String encodedPassword = user.getPassword();
        if (!AuthenticationProvider.matches(inputPassword, encodedPassword)) {
            throw new RuntimeException("Wrong password");
        }

        String teamCode = teamRepository.getById(user.getTeamId()).getName();

        return new UserWsm(user.getId(), user.getFirstName(), user.getLastName(), user.getEmail(), teamCode, user.getRole(), null);
    }
}

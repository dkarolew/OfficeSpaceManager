package agh.osm.api.user;

import agh.osm.api.place.PlaceState;
import agh.osm.api.role.RoleType;
import agh.osm.api.team.Team;
import agh.osm.api.team.TeamRepository;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Setter(onMethod_ = @Autowired)
    private final UserRepository userRepository;
    private final TeamRepository teamRepository;

    public UserService(UserRepository userRepository, TeamRepository teamRepository) {
        this.userRepository = userRepository;
        this.teamRepository = teamRepository;
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

        Team team = teamRepository.save(new Team(teamCode));
        userRepository.save(new User(firstName, lastName, email, team.getId(), RoleType.USER.getType()));
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
}

package agh.osm.api.team;

import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamService {
    @Setter(onMethod_ = @Autowired)
    private TeamRepository teamRepository;

    public List<Team> getTeams() {
        return teamRepository.findAll();
    }
}

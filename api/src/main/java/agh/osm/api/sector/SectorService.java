package agh.osm.api.sector;

import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SectorService {
    @Setter(onMethod_ = @Autowired)
    private SectorRepository sectorRepository;

    public List<Sector> getUsers() {
        return sectorRepository.findAll();
    }
}

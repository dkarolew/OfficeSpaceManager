package agh.osm.api.sector;


import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/sectors")
public class SectorController {
    @Setter(onMethod_ = @Autowired)
    private SectorService sectorService;

    @GetMapping
    public List<Sector> getSectors() {
        return sectorService.getSectors();
    }
}

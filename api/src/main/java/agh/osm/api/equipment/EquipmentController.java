package agh.osm.api.equipment;


import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/equipment")
@CrossOrigin(origins = "http://localhost:3000")
public class EquipmentController {
    @Setter(onMethod_ = @Autowired)
    private EquipmentService equipmentService;

    @GetMapping
    public List<Equipment> getEquipment() {
        return equipmentService.getEquipment();
    }

    @GetMapping("/now")
    public List<Equipment> getEquipmentForCurrentBusyPlaces() {
        return equipmentService.getEquipmentForCurrentBusyPlaces();
    }
}

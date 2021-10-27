package agh.osm.api.equipment;


import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/equipment")
public class EquipmentController {
    @Setter(onMethod_ = @Autowired)
    private EquipmentService equipmentService;

    @GetMapping
    public List<Equipment> getEquipment() {
        return equipmentService.getEquipment();
    }
}
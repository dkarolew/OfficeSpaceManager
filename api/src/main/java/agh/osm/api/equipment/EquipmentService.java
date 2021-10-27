package agh.osm.api.equipment;

import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipmentService {
    @Setter(onMethod_ = @Autowired)
    private EquipmentRepository equipmentRepository;

    public List<Equipment> getEquipment() {
        return equipmentRepository.findAll();
    }
}

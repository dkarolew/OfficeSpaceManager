package agh.osm.api.equipment;

import agh.osm.api.place.Place;
import agh.osm.api.place.PlaceService;
import agh.osm.api.place.PlaceState;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EquipmentService {
    private final EquipmentRepository equipmentRepository;
    private final PlaceService placeService;

    public EquipmentService(EquipmentRepository equipmentRepository, PlaceService placeService) {
        this.equipmentRepository = equipmentRepository;
        this.placeService = placeService;
    }

    public List<Equipment> getEquipment() {
        return equipmentRepository.findAll();
    }

    public List<Equipment> getEquipmentForCurrentBusyPlaces() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate localNow = LocalDate.now();
        String now = localNow.format(formatter);

        List<Long> busyPlaceIds = placeService.getPlacesInDate(now).stream()
                .filter(p -> p.getState().equals(PlaceState.BUSY))
                .map(Place::getId)
                .collect(Collectors.toList());

        return equipmentRepository.findAll()
                    .stream()
                    .filter(eq -> busyPlaceIds.contains(eq.getPlaceId()))
                    .collect(Collectors.toList());
    }
}

package agh.osm.api.place;


import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/places")
@CrossOrigin
public class PlaceController {
    @Setter(onMethod_ = @Autowired)
    private PlaceService placeService;

    @GetMapping
    public List<Place> getPlaces() {
        return placeService.getPlaces();
    }

    @GetMapping("/in/{date}")
    public List<Place> getPlacesInDate(@PathVariable String date) {
        return placeService.getPlacesInDate(date);
    }

    @PatchMapping("/{place}")
    public void updatePlace(@PathVariable String place) {
        placeService.updatePlace(place);
    }

    @PostMapping("/intelligent-reservation")
    public void intelligentReservation(@RequestBody PlacePositionListWsm placePositionListWsm) {
        placeService.intelligentReservation(placePositionListWsm);
    }
}

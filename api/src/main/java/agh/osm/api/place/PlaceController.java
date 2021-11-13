package agh.osm.api.place;


import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/places")
@CrossOrigin(origins = "http://localhost:3000")
public class PlaceController {
    @Setter(onMethod_ = @Autowired)
    private PlaceService placeService;

    @GetMapping
    public List<Place> getPlaces() {
        return placeService.getPlaces();
    }
}

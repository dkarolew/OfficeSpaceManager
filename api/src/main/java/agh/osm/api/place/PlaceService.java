package agh.osm.api.place;

import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaceService {
    @Setter(onMethod_ = @Autowired)
    private PlaceRepository placeRepository;

    public List<Place> getPlaces() {
        return placeRepository.findAll();
    }
}

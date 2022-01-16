package agh.osm.api.place;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonIgnoreProperties(ignoreUnknown = true)
public class PlacePositionWsm {

    private final Integer x;
    private final Integer y;
    private final String place;


    public PlacePositionWsm(@JsonProperty("x") Integer x, @JsonProperty("y") Integer y, @JsonProperty("place") String place) {
        this.x = x;
        this.y = y;
        this.place = place;
    }

    public Integer getX() {
        return x;
    }

    public Integer getY() {
        return y;
    }

    public String getPlace() {
        return place;
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y, place);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        PlacePositionWsm that = (PlacePositionWsm) obj;
        return Objects.equals(x, that.x) && Objects.equals(y, that.y) && Objects.equals(place, that.place);
    }

    @Override
    public String toString() {
        return "PlacePositionWsm{" +
                "x=" + x +
                "y=" + y +
                "place=" + place +
                "}";
    }
}

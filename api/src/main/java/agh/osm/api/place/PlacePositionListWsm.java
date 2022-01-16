package agh.osm.api.place;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;
import java.util.Objects;


@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonIgnoreProperties(ignoreUnknown = true)
public class PlacePositionListWsm {

    private final List<PlacePositionWsm> placePositionList;
    private final Long userId;
    private final String date;

    public PlacePositionListWsm(@JsonProperty("placePositionList") List<PlacePositionWsm> placePositionList, @JsonProperty("userId") Long userId, @JsonProperty("date") String date) {
        this.placePositionList = placePositionList;
        this.userId = userId;
        this.date = date;
    }

    public List<PlacePositionWsm> getPlacePositionList() {
        return placePositionList;
    }

    public Long getUserId() {
        return userId;
    }

    public String getDate() {
        return date;
    }

    @Override
    public int hashCode() {
        return Objects.hash(placePositionList, userId, date);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        PlacePositionListWsm that = (PlacePositionListWsm) obj;
        return Objects.equals(placePositionList, that.placePositionList) && Objects.equals(userId, that.userId) && Objects.equals(date, that.date);
    }

    @Override
    public String toString() {
        return "PlacePositionListWsm{" +
                "userId=" + userId +
                "date=" + date +
                "placePositionList=" + placePositionList +
                "}";
    }
}


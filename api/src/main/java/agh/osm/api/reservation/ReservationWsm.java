package agh.osm.api.reservation;

import agh.osm.api.equipment.EquipmentWsm;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;
import java.util.Objects;


@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonIgnoreProperties(ignoreUnknown = true)
public class ReservationWsm {

    private final Long userId;
    private final String place;
    private final String fromDate;
    private final String toDate;
    private final List<EquipmentWsm> equipment;
    private final boolean reminderEmail;

    public ReservationWsm(@JsonProperty("userId") Long userId, @JsonProperty("place") String place, @JsonProperty("fromDate") String fromDate, @JsonProperty("toDate") String toDate, @JsonProperty("equipment") List<EquipmentWsm> equipment, @JsonProperty("reminderEmail") boolean reminderEmail) {
        this.userId = userId;
        this.place = place;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.equipment = List.copyOf(equipment);
        this.reminderEmail = reminderEmail;
    }

    public Long getUserId() { return userId; }

    public String getPlace() {
        return place;
    }

    public String getFromDate() {
        return fromDate;
    }

    public String getToDate() {
        return toDate;
    }

    public List<EquipmentWsm> getEquipment() {
        return equipment;
    }

    public boolean getReminderEmail() { return reminderEmail; }

    @Override
    public int hashCode() {
        return Objects.hash(userId, place, fromDate, toDate, equipment, reminderEmail);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        ReservationWsm that = (ReservationWsm) obj;
        return Objects.equals(userId, that.userId) && Objects.equals(place, that.place) && Objects.equals(fromDate, that.fromDate) && Objects.equals(toDate, that.toDate)&& Objects.equals(equipment, that.equipment) && Objects.equals(reminderEmail, that.reminderEmail);
    }

    @Override
    public String toString() {
        return "ReservationWsm{" +
                "userId=" + userId +
                "place=" + place +
                ", fromDate=" + fromDate +
                ", toDate=" + toDate +
                ", equipment=" + equipment +
                ", reminderEmail=" + reminderEmail +
                "}";
    }
}

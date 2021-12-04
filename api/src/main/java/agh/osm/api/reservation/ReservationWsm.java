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

    private final String teamCode;
    private final String date;
    private final List<EquipmentWsm> equipment;
    private final boolean reminderEmail;

    public ReservationWsm(@JsonProperty("teamCode") String teamCode, @JsonProperty("date") String date, @JsonProperty("equipment") List<EquipmentWsm> equipment, @JsonProperty("reminderEmail") boolean reminderEmail) {
        this.teamCode = teamCode;
        this.date = date;
        this.equipment = List.copyOf(equipment);
        this.reminderEmail = reminderEmail;
    }

    public String getTeamCode() {
        return teamCode;
    }

    public String getDate() {
        return date;
    }

    public List<EquipmentWsm> getEquipment() {
        return equipment;
    }

    public boolean getReminderEmail() { return reminderEmail; }

    @Override
    public int hashCode() {
        return Objects.hash(teamCode, date, equipment, reminderEmail);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        ReservationWsm that = (ReservationWsm) obj;
        return Objects.equals(teamCode, that.teamCode) && Objects.equals(date, that.date) && Objects.equals(equipment, that.equipment) && Objects.equals(reminderEmail, that.reminderEmail);
    }

    @Override
    public String toString() {
        return "ReservationWsm{" +
                "teamCode=" + teamCode +
                ", date=" + date +
                ", equipment=" + equipment +
                ", reminderEmail=" + reminderEmail +
                "}";
    }
}

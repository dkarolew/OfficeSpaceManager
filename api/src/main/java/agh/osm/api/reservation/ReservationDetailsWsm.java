package agh.osm.api.reservation;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonIgnoreProperties(ignoreUnknown = true)
public class ReservationDetailsWsm {

    private final String place;
    private final String teamCode;
    private final boolean reminderEmail;

    public ReservationDetailsWsm(@JsonProperty("place") String place, @JsonProperty("teamCode") String teamCode, @JsonProperty("reminderEmail") boolean reminderEmail) {
        this.place = place;
        this.teamCode = teamCode;
        this.reminderEmail = reminderEmail;
    }

    public String getPlace() {
        return place;
    }

    public String getTeamCode() { return teamCode; }

    public boolean getReminderEmail() { return reminderEmail; }

    @Override
    public int hashCode() {
        return Objects.hash(place, teamCode, reminderEmail);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        ReservationDetailsWsm that = (ReservationDetailsWsm) obj;
        return Objects.equals(place, that.place) && Objects.equals(teamCode, that.teamCode) && Objects.equals(reminderEmail, that.reminderEmail);
    }

    @Override
    public String toString() {
        return "ReservationDetailsWsm{" +
                "place=" + place +
                ", teamCode=" + teamCode +
                ", reminderEmail=" + reminderEmail +
                "}";
    }
}

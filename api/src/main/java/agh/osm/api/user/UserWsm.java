package agh.osm.api.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Objects;


@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserWsm {
    private final String firstName;
    private final String lastName;
    private final String email;
    private final String teamCode;

    public UserWsm(@JsonProperty("firstName") String firstName, @JsonProperty("lastName") String lastName, @JsonProperty("email") String email, @JsonProperty("teamCode") String teamCode) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.teamCode = teamCode;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getTeamCode() {
        return teamCode;
    }

    @Override
    public int hashCode() {
        return Objects.hash(firstName, lastName, email, teamCode);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        UserWsm that = (UserWsm) obj;
        return Objects.equals(firstName, that.firstName) && Objects.equals(lastName, that.lastName) && Objects.equals(email, that.email)&& Objects.equals(teamCode, that.teamCode);
    }

    @Override
    public String toString() {
        return "ReservationWsm{" +
                "firstName=" + firstName +
                ", lastName=" + lastName +
                ", email=" + email +
                ", teamCode=" + teamCode +
                "}";
    }
}

package agh.osm.api.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Objects;


@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserWsm {
    private final Long userId;
    private final String firstName;
    private final String lastName;
    private final String email;
    private final String teamCode;
    private final String role;
    private final String password;
    private final String expirationDate;

    public UserWsm(@JsonProperty("userId") Long userId, @JsonProperty("firstName") String firstName, @JsonProperty("lastName") String lastName, @JsonProperty("email") String email, @JsonProperty("teamCode") String teamCode, @JsonProperty("role") String role, @JsonProperty("password") String password, @JsonProperty("expirationDate") String expirationDate) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.teamCode = teamCode;
        this.role = role;
        this.password = password;
        this.expirationDate = expirationDate;
    }

    public Long getUserId() {
        return userId;
    }

    public String getFirstName() { return firstName; }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getTeamCode() {
        return teamCode;
    }

    public String getRole() { return role; }

    public String getPassword() {
        return password;
    }

    public String getExpirationDate() { return expirationDate; }

    @Override
    public int hashCode() {
        return Objects.hash(userId, firstName, lastName, email, teamCode, role, password, expirationDate);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        UserWsm that = (UserWsm) obj;
        return Objects.equals(userId, that.userId) && Objects.equals(firstName, that.firstName) && Objects.equals(lastName, that.lastName) && Objects.equals(email, that.email) && Objects.equals(teamCode, that.teamCode) && Objects.equals(role, that.role) && Objects.equals(password, that.password) && Objects.equals(expirationDate, that.expirationDate);
    }

    @Override
    public String toString() {
        return "UserWsm{" +
                "userId=" + userId +
                "firstName=" + firstName +
                ", lastName=" + lastName +
                ", email=" + email +
                ", teamCode=" + teamCode +
                ", role=" + role +
                ", expirationDate=" + expirationDate +
                "}";
    }
}

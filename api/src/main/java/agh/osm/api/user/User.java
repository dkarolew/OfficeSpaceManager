package agh.osm.api.user;

import agh.osm.api.role.RoleType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Table
@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @Column(name = "USER_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private Long teamId;
    private String role;
    private String password;
    private LocalDate expirationDate;

    public User(String firstName, String lastName, String email, Long teamId, String role, String password, LocalDate expirationDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.teamId = teamId;
        this.role = role;
        this.password = password;
        this.expirationDate = expirationDate;
    }
}

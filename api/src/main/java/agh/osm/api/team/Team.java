package agh.osm.api.team;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table
@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Team {
    @Id
    @Column(name = "TEAM_ID")
    @SequenceGenerator(name = "TEAM_SEQ", sequenceName = "TEAM_SEQ", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TEAM_SEQ")
    private Long id;
    private String name;
    private Long sectorId;
}

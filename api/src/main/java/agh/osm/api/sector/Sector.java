package agh.osm.api.sector;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table
@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Sector {
    @Id
    @Column(name = "SECTOR_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String code;
}

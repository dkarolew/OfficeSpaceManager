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
    @SequenceGenerator(name = "SECTOR_SEQ", sequenceName = "SECTOR_SEQ", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SECTOR_SEQ")
    private Long id;
    private String code;
}

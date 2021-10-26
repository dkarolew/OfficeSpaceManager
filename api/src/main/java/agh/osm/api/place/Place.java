package agh.osm.api.place;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table
@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Place {
    @Id
    @Column(name = "PLACE_ID")
    @SequenceGenerator(name = "PLACE_SEQ", sequenceName = "PLACE_SEQ", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PLACE_SEQ")
    private Long id;
    private Long sectorId;
    private String number;
    @Enumerated(EnumType.STRING)
    private PlaceType type;
}

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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long sectorId;
    private String number;
    @Enumerated(EnumType.STRING)
    private PlaceType type;
    @Enumerated(EnumType.STRING)
    private PlaceState state;

    public void setState(PlaceState state) {
        this.state = state;
    }
}

package agh.osm.api.equipment;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table
@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Equipment {
    @Id
    @Column(name = "EQUIPMENT_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long placeId;
    private Long reservationId;
    private String type;

    public Equipment(String type, Long placeId, Long reservationId) {
        this.type = type;
        this.placeId = placeId;
        this.reservationId = reservationId;
    }
}

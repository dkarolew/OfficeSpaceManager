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
    @SequenceGenerator(name = "EQUIPMENT_SEQ", sequenceName = "EQUIPMENT_SEQ", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "EQUIPMENT_SEQ")
    private Long id;
    private Long placeId;
    private Long reservationId;
    private String name;
    private String type;
}

package agh.osm.api.reservation;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Table
@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {
    @Id
    @Column(name = "RESERVATION_ID")
    @SequenceGenerator(name = "RESERVATION_SEQ", sequenceName = "RESERVATION_SEQ", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "RESERVATION_SEQ")
    private Long id;
    private Long placeId;
    private Long userId;
    private Date dateStart;
    private Date dateEnd;
}

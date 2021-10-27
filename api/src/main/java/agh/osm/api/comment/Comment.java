package agh.osm.api.comment;

import agh.osm.api.reservation.Reservation;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table
@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
    @Id
    @Column(name = "COMMENT_ID")
    @SequenceGenerator(name = "COMMENT_SEQ", sequenceName = "COMMENT_SEQ", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "COMMENT_SEQ")
    private Long id;
    private String title;
    private String description;
    private Long reservationId;
    private Long userId;
}

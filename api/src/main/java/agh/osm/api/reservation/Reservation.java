package agh.osm.api.reservation;

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
public class Reservation {
    @Id
    @Column(name = "RESERVATION_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long placeId;
    private Long userId;
    private LocalDate dateStart;
    private LocalDate dateEnd;
    private boolean reminderEmail;

    public Reservation(LocalDate dateStart, LocalDate dateEnd, Long userId, Long placeId, boolean reminderEmail) {
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.userId = userId;
        this.placeId = placeId;
        this.reminderEmail = reminderEmail;
    }

    public void setDateStart(LocalDate dateStart) {
        this.dateStart = dateStart;
    }

    public void setDateEnd(LocalDate dateEnd) {
        this.dateEnd = dateEnd;
    }

    public void setRemainderEmail(boolean reminderEmail) {
        this.reminderEmail = reminderEmail;
    }
}

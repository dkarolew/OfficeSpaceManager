package agh.osm.api.reservation;


import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/reservations")
@CrossOrigin(origins = "http://localhost:3000")
public class ReservationController {
    @Setter(onMethod_ = @Autowired)
    private ReservationService reservationService;

    @GetMapping
    public List<Reservation> getReservations() {
        return reservationService.getReservations();
    }

    @GetMapping("/{reservationId}/details")
    public ReservationDetailsWsm getReservationWithDetails(@PathVariable Long reservationId) {
        return reservationService.getReservationDetails(reservationId);
    }

    @PostMapping
    public void saveReservation(@RequestBody ReservationWsm reservationWsm) {
        reservationService.createReservation(reservationWsm);
    }

    @PatchMapping("/{reservationId}")
    public void updateReservation(@RequestBody ReservationWsm reservationWsm, @PathVariable Long reservationId) {
        reservationService.updateReservation(reservationWsm, reservationId);
    }

    @DeleteMapping("/{reservationId}")
    public void deleteReservation(@PathVariable Long reservationId) {
        reservationService.deleteReservation(reservationId);
    }
}

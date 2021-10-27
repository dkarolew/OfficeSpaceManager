package agh.osm.api.reservation;


import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/reservations")
public class ReservationController {
    @Setter(onMethod_ = @Autowired)
    private ReservationService reservationService;

    @GetMapping
    public List<Reservation> getReservations() {
        return reservationService.getReservations();
    }
}

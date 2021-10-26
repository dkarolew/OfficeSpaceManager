package agh.osm.api.reservation;

import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationService {
    @Setter(onMethod_ = @Autowired)
    private ReservationRepository reservationRepository;

    public List<Reservation> getUsers() {
        return reservationRepository.findAll();
    }
}

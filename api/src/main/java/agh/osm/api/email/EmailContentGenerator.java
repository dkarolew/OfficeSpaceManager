package agh.osm.api.email;

import agh.osm.api.equipment.EquipmentType;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

@Component
public class EmailContentGenerator {

    private static final String CREATE_RESERVATION_TITLE = "[OFFICE SPACE MANAGER] - Reservation";
    private static final String CREATE_ACCOUNT_TITLE = "[OFFICE SPACE MANAGER] - Account";

    private EmailContentGenerator() {

    }

    public static EmailMessage generateCreateReservationEmailMessage(String firstName, String email, String place, LocalDate fromDate, LocalDate toDate, List<EquipmentType> equipments) {
        return new EmailMessage(email, CREATE_RESERVATION_TITLE , String.format(
                "Hi %s,\n\n" +
                "Your reservation has been created.\n\n" +
                    "Place: %s\n" +
                    "Date: %s - %s\n" +
                    "Equipment: %s\n\n" +
                "Your sincerely,\n" +
                "Support Team",
                firstName, place, fromDate, toDate, equipments));
    }

    public static EmailMessage generateCreateAccountEmailMessage(String firstName, String email, String password) {
        return new EmailMessage(email, CREATE_ACCOUNT_TITLE , String.format(
                "Hi %s,\n\n" +
                "Your account has been created.\n\n" +
                    "Login: %s\n" +
                    "Password: %s\n\n" +
                "Your sincerely,\n" +
                "Support Team",
                firstName, email, password));
    }
}

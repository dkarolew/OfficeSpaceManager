package agh.osm.api.email;

import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@Service
public class SmtpEmailService implements EmailService {

    @Override
    public boolean sendEmail(EmailMessage emailMessage) {
        String from = "officespacemanager@gmail.com";
        String to = emailMessage.getRecipient();
        final String username = "officespacemanager@gmail.com";
        final String password = "zejwhpaaezntqism";

        String host = "smtp.gmail.com";

        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(username, password);
                    }
                });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
            message.setSubject(emailMessage.getTitle());
            message.setText(emailMessage.getContent());

            Transport.send(message);
        } catch (MessagingException e) {
            return false;
        }
        return true;
    }
}

package agh.osm.api.security;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AuthenticationProvider {

    private static final PasswordEncoder encoder = new BCryptPasswordEncoder(10);

    private AuthenticationProvider() {

    }

    public static String encode(CharSequence rawPassword) {
        return encoder.encode(rawPassword);
    }

    public static boolean matches(CharSequence rawPassword, String encodedPassword) {
        return encoder.matches(rawPassword, encodedPassword);
    }
}

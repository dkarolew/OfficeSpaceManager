package agh.osm.api.security;

import agh.osm.api.user.UserWsm;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path = "api/v1/auth")
@CrossOrigin
public class AuthenticationController {
    @Setter(onMethod_ = @Autowired)
    private AuthenticationService authenticationService;

    @PostMapping("/login")
    public UserWsm login(@RequestBody LoginWsm loginWsm) {
        return authenticationService.login(loginWsm);
    }

}
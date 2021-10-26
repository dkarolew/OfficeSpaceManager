package agh.osm.api.user;


import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/user")
public class UserController {
    @Setter(onMethod_ = @Autowired)
    private UserService userService;

    @GetMapping
    public List<User> getUsers() {
        return userService.getUsers();
    }
}

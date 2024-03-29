package agh.osm.api.role;


import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/roles")
@CrossOrigin
public class RoleController {
    @Setter(onMethod_ = @Autowired)
    private RoleService roleService;

    @GetMapping
    public List<Role> getRoles() {
        return roleService.getRoles();
    }
}

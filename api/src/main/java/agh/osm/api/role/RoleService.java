package agh.osm.api.role;

import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {
    @Setter(onMethod_ = @Autowired)
    private RoleRepository roleRepository;

    public List<Role> getUsers() {
        return roleRepository.findAll();
    }
}

package agh.osm.api.user;

import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Setter(onMethod_ = @Autowired)
    private UserRepository userRepository;

    public List<User> getUsers() {
        return userRepository.findAll();
    }
}

package agh.osm.api.comment;

import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    @Setter(onMethod_ = @Autowired)
    private CommentRepository commentRepository;

    public List<Comment> getUsers() {
        return commentRepository.findAll();
    }
}

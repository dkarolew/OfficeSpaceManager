package agh.osm.api.comment;


import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/comments")
public class CommentController {
    @Setter(onMethod_ = @Autowired)
    private CommentService commentService;

    @GetMapping
    public List<Comment> getUsers() {
        return commentService.getUsers();
    }
}

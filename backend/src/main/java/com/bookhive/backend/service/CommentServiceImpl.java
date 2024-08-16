package com.bookhive.backend.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.bookhive.backend.domain.AppUser;
import com.bookhive.backend.domain.Comment;
import com.bookhive.backend.repository.AppUserRepository;
import com.bookhive.backend.repository.CommentRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;
    private final AppUserRepository userRepository;

    @Override
    public Comment saveComment(Comment comment) {
        log.info("Saving new comment {} to the database", comment.getContent());
        return commentRepository.save(comment);
    }

    @Override
    public void addCommentToUser(String username, Comment comment) {
        log.info("Adding comment {} to user {}", comment.getContent(), username);

        AppUser user = userRepository.findByUsername(username);
        if (user != null) {
            comment.setUser(user);
            Comment savedComment = commentRepository.save(comment);
            user.getComments().add(savedComment);
            userRepository.save(user);
        } else {
            log.warn("User with username {} not found", username);
        }
    }

    @Override
    public List<Comment> getComments() {
        log.info("Fetching all comments");
        return commentRepository.findAll();
    }
}

package com.bookhive.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookhive.backend.domain.Comment;
import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findByContent(String content);

}

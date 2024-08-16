package com.bookhive.backend.service;

import java.util.List;

import com.bookhive.backend.domain.Comment;

public interface CommentService {

    Comment saveComment(Comment comment);

    void addCommentToUser(String username, Comment comment);

    List<Comment> getComments();

}

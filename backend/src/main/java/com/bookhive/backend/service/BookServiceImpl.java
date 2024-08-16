package com.bookhive.backend.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.bookhive.backend.domain.Book;
import com.bookhive.backend.domain.Comment;
import com.bookhive.backend.repository.BookRepository;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;

    @Override
    public Book saveBook(Book book) {
        log.info("Saving new book {} to the database", book.getName());
        return bookRepository.save(book);
    }

    @Override
    public Book getBookByName(String name) {
        log.info("Fetching book {}", name);
        return bookRepository.findByName(name).stream().findFirst().orElse(null);
    }

    @Override
    public List<Book> getBooks() {
        log.info("Fetching all books");
        return bookRepository.findAll();
    }

    @Override
    public List<Book> getBooksByRating(Integer rating) {
        log.info("Fetching book by rating {}", rating);
        return bookRepository.findAll().stream()
                .filter(book -> book.getComments().stream()
                        .mapToInt(Comment::getRating)
                        .average().orElse(0) >= rating)
                .collect(Collectors.toList());
    }
}

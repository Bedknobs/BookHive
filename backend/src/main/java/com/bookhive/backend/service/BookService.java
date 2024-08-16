package com.bookhive.backend.service;

import java.util.List;

import com.bookhive.backend.domain.Book;

public interface BookService {

    Book saveBook(Book book);

    Book getBookByName(String name);

    List<Book> getBooks();

    List<Book> getBooksByRating(Integer rating);

}

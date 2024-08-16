package com.bookhive.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookhive.backend.domain.Book;
import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {

    List<Book> findByName(String name);

}

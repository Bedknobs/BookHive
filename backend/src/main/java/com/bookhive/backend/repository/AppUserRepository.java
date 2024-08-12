package com.bookhive.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookhive.backend.domain.AppUser;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {

    AppUser findByUsername(String username);

}

package com.bookhive.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookhive.backend.domain.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Role findByName(String name);

}

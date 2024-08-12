package com.bookhive.backend.service;

import java.util.List;

import com.bookhive.backend.domain.AppUser;
import com.bookhive.backend.domain.Role;

public interface AppUserService {
    AppUser saveUser(AppUser user);

    Role saveRole(Role role);

    void addRoleToUser(String username, String roleName);

    AppUser getUser(String username);

    List<AppUser> getUsers();
}

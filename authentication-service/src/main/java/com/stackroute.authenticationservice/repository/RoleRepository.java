package com.stackroute.authenticationservice.repository;

import java.util.Optional;

import com.stackroute.authenticationservice.model.Role;
import com.stackroute.authenticationservice.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
   Optional<Role> findByName(RoleName roleName);
}
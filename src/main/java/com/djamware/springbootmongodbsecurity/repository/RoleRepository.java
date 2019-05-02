package com.djamware.springbootmongodbsecurity.repository;

import com.djamware.springbootmongodbsecurity.domain.Role;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Role, String> {

    Role findByRole(String role);
}
package com.stackroute.repository;

import com.stackroute.domain.User;

import com.stackroute.exception.UserNotFoundException;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends MongoRepository<User, String> {

    boolean existsByEmailId(String emailId);
    User findByEmailId(String emailId);
//     boolean existsById(String id);

}

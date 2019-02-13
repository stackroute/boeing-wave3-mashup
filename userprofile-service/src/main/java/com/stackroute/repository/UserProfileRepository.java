package com.stackroute.repository;

import com.stackroute.domain.UserProfile;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserProfileRepository extends MongoRepository<UserProfile, Integer> {
//    @Query(value = "SELECT * FROM track WHERE name=?1", count = true)
//    public List<UserProfile> findByName(String name);

}

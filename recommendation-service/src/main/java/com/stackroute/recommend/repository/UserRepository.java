package com.stackroute.recommend.repository;

import com.stackroute.recommend.model.User;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import java.util.Collection;


public interface UserRepository extends Neo4jRepository<User,Long> {

    @Query("MATCH (u:User)<-[a:ATTEMPTED]-(q:Question) RETURN u,a,q")
    Collection<User> getAllUsers();
}

package com.stackroute.repository;
import com.stackroute.domain.Score;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScoreRepository extends ReactiveMongoRepository<Score, String> {

}

package com.stackroute.repository;

import com.stackroute.domain.Questions;
import org.springframework.data.mongodb.repository.MongoRepository;

/*question repository interface*/
public interface QuestionRepository extends MongoRepository<Questions, Integer> {

}

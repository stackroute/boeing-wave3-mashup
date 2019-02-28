package com.stackroute.voting.repository;

import com.stackroute.voting.domain.Vote;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface VoteRepository extends MongoRepository<Vote,String>, VoteRepositoryCustom {


}

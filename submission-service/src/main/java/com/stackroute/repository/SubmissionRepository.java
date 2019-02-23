package com.stackroute.repository;

import com.stackroute.domain.SubmissionData;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubmissionRepository extends MongoRepository<SubmissionData, String> {

    SubmissionData getSubmissionDataByUsernameAndQuestionId(String username, int questionId);
}

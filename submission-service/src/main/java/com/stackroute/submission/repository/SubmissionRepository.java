package com.stackroute.submission.repository;

import com.stackroute.submission.domain.SubmissionData;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubmissionRepository extends MongoRepository<SubmissionData, String> {

    SubmissionData getSubmissionDataByUsernameAndQuestionId(String username, int questionId);
}

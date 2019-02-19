package com.stackroute.submission.service;

import com.stackroute.submission.domain.SubmissionData;
import com.stackroute.submission.repository.SubmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubmissionServiceImpl implements SubmissionService{

    private SubmissionRepository submissionRepository;

    @Autowired
    public SubmissionServiceImpl(SubmissionRepository submissionRepository) {
        this.submissionRepository = submissionRepository;
    }

    @Override
    public SubmissionData saveSubmission(SubmissionData submissionData) {
        SubmissionData submissionObj = submissionRepository.save(submissionData);
        return submissionObj;
    }

    @Override
    public SubmissionData getSubmission(String username, int questionId) {
        SubmissionData submissionObj1 = submissionRepository.getSubmissionDataByUsernameAndQuestionId(username,questionId);
        return submissionObj1;
    }
}

package com.stackroute.service;

import com.stackroute.domain.SubmissionData;

public interface SubmissionService {
    public SubmissionData saveSubmission(SubmissionData submissionData);

    public SubmissionData getSubmission(String username, int questionId);
}

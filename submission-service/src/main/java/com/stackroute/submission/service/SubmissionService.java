package com.stackroute.submission.service;

import com.stackroute.submission.domain.SubmissionData;

public interface SubmissionService {
    public SubmissionData saveSubmission(SubmissionData submissionData);

    public SubmissionData getSubmission(String username, int questionId);
}

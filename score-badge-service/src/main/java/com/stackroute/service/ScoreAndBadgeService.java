package com.stackroute.service;

import com.stackroute.domain.Score;
import com.stackroute.domain.SubmissionData;

/*question service interface*/
public interface ScoreAndBadgeService {

    Score calcTotalScore(SubmissionData submissionData);

}

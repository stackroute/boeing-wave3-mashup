package com.stackroute.service;

import com.stackroute.domain.Score;
import com.stackroute.domain.SubmissionData;
import com.stackroute.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/*Question Service Implementation class*/
@Service
public class ScoreAndBadgeServiceImpl implements ScoreAndBadgeService {

    private ScoreRepository scoreRepository;

    @Autowired
    public ScoreAndBadgeServiceImpl(ScoreRepository scoreRepository) {
        this.scoreRepository = scoreRepository;
    }


    @Override
    public Score calcTotalScore(SubmissionData submissionData) {
        Score score=new Score();

        double totlScore = score.getTotalScore()+submissionData.getScore();
        score.setTotalScore(totlScore);
        scoreRepository.save(score);
        return score;
    }
}

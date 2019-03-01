package com.stackroute.service;

import com.stackroute.domain.Score;
import com.stackroute.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

/*Question Service Implementation class*/
@Service
public class ScoreAndBadgeServiceImpl implements ScoreAndBadgeService {

    private ScoreRepository scoreRepository;

    @Autowired
    public ScoreAndBadgeServiceImpl(ScoreRepository scoreRepository) {
        this.scoreRepository = scoreRepository;
    }

    //service method to calc and update data
    @Override
    public Mono<Score> calcAndUpdateTotalScore(Score score, double scoreOfQuestion) {
        return scoreRepository.findById(score.getUserName()).flatMap( existingScore-> {
            if(score.getUserName() != null){
                double totlScore = 0.0;
                totlScore = (existingScore.getTotalScore()+ scoreOfQuestion);
                existingScore.setTotalScore(totlScore);
            }
            return scoreRepository.save(existingScore);
        });
    }

    //service method to save data
    @Override
    public Mono<Score> saveTotalScore(Score score){
        return scoreRepository.save(score);
    }

    //service method to get data
    @Override
    public Mono<Score> getTotalScore(String userName)
    {
        return scoreRepository.findById(userName);
    }
}

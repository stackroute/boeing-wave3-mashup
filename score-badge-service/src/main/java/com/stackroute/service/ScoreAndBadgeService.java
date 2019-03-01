package com.stackroute.service;

import com.stackroute.domain.Score;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/*question service interface*/
public interface ScoreAndBadgeService {

    Mono<Score> calcAndUpdateTotalScore(Score score, double scoreOfQuestion);
    Mono<Score> saveTotalScore(Score score);
    Mono<Score> getTotalScore(String userName);
}

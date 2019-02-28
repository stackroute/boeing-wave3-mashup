package com.stackroute.voting.service;

import com.stackroute.voting.domain.Vote;
import org.springframework.data.mongodb.core.aggregation.ArrayOperators;

import java.util.List;

public interface VotingService {

    public List<Vote> upVotesForAQuestion(int questionId);
    public List<Vote> downVotesForAQuestion(int questionId);

    public List<Vote> listOfQuestionsByUser(String userName);
    public List<Vote> voteStatusOfQuestionByUser(int questionId,String userName);


}

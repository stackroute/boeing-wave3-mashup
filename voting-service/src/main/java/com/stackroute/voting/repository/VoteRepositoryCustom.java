package com.stackroute.voting.repository;

import com.stackroute.voting.domain.Vote;

import java.util.List;

public interface VoteRepositoryCustom {

    public List<Vote> fetchUpForQuestion(int questionId);

    public List<Vote> fetchDownForQuestion(int questionId);

    public List<Vote> fetchQuestionsByUser(String userName);

    public List<Vote> fetchQuestionVoteStatus(int questionId,String userName);
}

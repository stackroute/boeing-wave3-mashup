package com.stackroute.repository;

import com.stackroute.domain.Questions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.ArrayList;
import java.util.List;

public class QuestionRepositoryCustomImpl implements QuestionRepositoryCustom{

    private final MongoOperations operations;

    public QuestionRepositoryCustomImpl(MongoOperations operations) {
        this.operations = operations;
    }


    @Override
    public Questions getById(int questionId) {
        Query query = new Query();
        query.addCriteria(Criteria.where("questionId").is(questionId));
        Questions questionObj= operations.findOne(query,Questions.class);
        return questionObj;
    }

    @Override
    public List<Questions> getByTag(String tag) {
      //  System.out.println(tag+"tag given here");
        Query query = new Query();
        query.addCriteria(Criteria.where("tags").is(tag));
        List<Questions> questions= operations.find(query,Questions.class);
      //  System.out.println(questions.size()+"fshdfsdjhfjhdfjdsfjhsdfhsdfj");
        return questions;
    }
}

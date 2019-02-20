package com.stackroute.recommendation.model;

import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.List;

@NodeEntity
public class User {

    @GraphId

    private Long id;


    private String emailId;
    //private List<String> interests;
    private String interests;
    //private List<String> tags;



    @Relationship(type = "ATTEMPTED", direction = Relationship.INCOMING)
    private List<Question> questions;

    public User() {
    }

    public void attempt(Question question){
        this.questions.add(question);
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getInterests() {
        return interests;
    }

    public void setInterests(String interests) {
        this.interests = interests;
    }


    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }
}

package com.stackroute.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="userscore")
public class Score {
    @Id
    int questionId;
    @Field
    String userName;
    @Field
    double score;
    @Field
    double totalScore;
    @Field
    String difficulty;

    public Score(){

    }

    public Score(int questionId, String userName, double score, double totalScore, String difficulty) {
        this.questionId = questionId;
        this.userName = userName;
        this.score = score;
        this.totalScore = totalScore;
        this.difficulty = difficulty;
    }

    public int getQuestionId() {
        return questionId;
    }

    public void setQuestionId(int questionId) {
        this.questionId = questionId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }

    public double getTotalScore() {
        return totalScore;
    }

    public void setTotalScore(double totalScore) {
        this.totalScore = totalScore;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }
}

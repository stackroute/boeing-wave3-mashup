package com.stackroute.submission.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "Submission")
public class SubmissionData {
    @Id
    private String username;
    @Field
    private int questionId;
    @Field
    private String questionTitle;
    @Field
    private String result;
    @Field
    private int testCasePassed;
    @Field
    private int totalTestCases;
    @Field
    private String difficulty;
    @Field
    private String solution;
    @Field
    private double score;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getQuestionId() {
        return questionId;
    }

    public void setQuestionId(int questionId) {
        this.questionId = questionId;
    }

    public String getQuestionTitle() {
        return questionTitle;
    }

    public void setQuestionTitle(String questionTitle) {
        this.questionTitle = questionTitle;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public int getTestCasePassed() {
        return testCasePassed;
    }

    public void setTestCasePassed(int testCasePassed) {
        this.testCasePassed = testCasePassed;
    }

    public int getTotalTestCases() {
        return totalTestCases;
    }

    public void setTotalTestCases(int totalTestCases) {
        this.totalTestCases = totalTestCases;
    }

    public String getSolution() {
        return solution;
    }

    public void setSolution(String solution) {
        this.solution = solution;
    }

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }
}

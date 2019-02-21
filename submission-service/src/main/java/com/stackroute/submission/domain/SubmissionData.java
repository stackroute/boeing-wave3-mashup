package com.stackroute.submission.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Submission")
public class SubmissionData {
    @Id
    private String username;
    private int questionId;
    private String questionTitle;
    private String result;
    private String testCaseResult;
    private String solution;

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

    public String getTestCaseResult() {
        return testCaseResult;
    }

    public void setTestCaseResult(String testCaseResult) {
        this.testCaseResult = testCaseResult;
    }

    public String getSolution() {
        return solution;
    }

    public void setSolution(String solution) {
        this.solution = solution;
    }
}

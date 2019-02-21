package com.stackroute.domain;

public class SubmissionData {
    String userName;
    int QuestionId;
    String QuestionTitle;
    String result;
    int testCasesPassed;
    String solution;
    String tag;
    String difficulty;
    double score;

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }

}

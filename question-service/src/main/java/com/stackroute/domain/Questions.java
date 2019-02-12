package com.stackroute.domain;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.annotation.Id;

@Data
@Document
//@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Questions{
    @Id
    public int questionId;
    @Field
    private String questionTitle;
    @Field
    private String  questionDescription;
    @Field
    private String difficulty;
    @Field
    private String tags;
    @Field
    private String gitUrl;

    public Questions(int questionId, String questionTitle, String questionDescription, String difficulty, String tags, String gitUrl) {
        this.questionId = questionId;
        this.questionTitle = questionTitle;
        this.questionDescription = questionDescription;
        this.difficulty = difficulty;
        this.tags = tags;
        this.gitUrl = gitUrl;
    }

    public double getQuestionId() {
        return questionId;
    }

    public void setQuestionId(int questionId) {
        this.questionId = questionId;
    }
}

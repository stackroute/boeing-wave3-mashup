package com.stackroute.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document
@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder    //need to be discussed
@ApiModel(description = "All details about the Question. ")
public class Question {
    @Id
    @ApiModelProperty(notes = "The database generated question ID")
    private int questionId;
    @Field
    @ApiModelProperty(notes = "The questionTitle of track")
    private String questionTitle;
//    @Field
//    @ApiModelProperty(notes = "The firstName of user")
//    private String submissionType;

    public Question() {}
    public Question(int questionId, String questionTitle) {
        this.questionId = questionId;
        this.questionTitle = questionTitle;
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
}

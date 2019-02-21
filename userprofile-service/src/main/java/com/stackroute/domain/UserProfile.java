package com.stackroute.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;


@Document(collection = "USERPROFILE")
@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder    //need to be discussed
@ApiModel(description = "All details about the UserProfile. ")

public class UserProfile {
    @Id
    @ApiModelProperty(notes = "The userName of user")
    private String userName;
    @Field
    @ApiModelProperty(notes = "The firstName of user")
    private String firstName;
    @Field
    @ApiModelProperty(notes = "The lastName of user")
    private String lastName;
    @Field
    @ApiModelProperty(notes = "The password of user")
    private String password;
    @Field
    @ApiModelProperty(notes = "The emailId of user")
    private String emailId;
    @Field
    @ApiModelProperty(notes = "The user interests")
    private List<String> interests;
    @Field
    @ApiModelProperty(notes = "The user attemptedQuestion")
    private List<Question> attemptedQuestion;
    @Field
    @ApiModelProperty(notes = "The user postedQuestion")
    private List<Question> postedQuestion;

    public UserProfile(){}
    public UserProfile(String userName, String firstName, String lastName, String password, String emailId, List<String> interests, List<Question> attemptedQuestion, List<Question> postedQuestion) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.emailId = emailId;
        this.interests = interests;
        this.attemptedQuestion = attemptedQuestion;
        this.postedQuestion = postedQuestion;
    }
    
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public List<String> getInterests() {
        return interests;
    }

    public void setInterests(List<String> interests) {
        this.interests = interests;
    }

    public List<Question> getAttemptedQuestion() {
        return attemptedQuestion;
    }

    public void setAttemptedQuestion(List<Question> attemptedQuestion) {
        this.attemptedQuestion = attemptedQuestion;
    }

    public List<Question> getPostedQuestion() {
        return postedQuestion;
    }

    public void setPostedQuestion(List<Question> postedQuestion) {
        this.postedQuestion = postedQuestion;
    }
}

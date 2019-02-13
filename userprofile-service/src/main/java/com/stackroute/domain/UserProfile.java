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
@NoArgsConstructor
@AllArgsConstructor
@Builder    //need to be discussed
@ApiModel(description = "All details about the UserProfile. ")
public class UserProfile {
    @Id
    @ApiModelProperty(notes = "The database generated user ID")
    private int id;
    @Field
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
}

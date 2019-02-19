package com.stackroute.controller;

import com.stackroute.domain.Question;
import com.stackroute.domain.UserProfile;
import com.stackroute.exception.UserProfileNotFoundException;
import com.stackroute.exception.UserProfileAlreadyExistException;
import com.stackroute.service.UserProfileService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//Use an interface that can be implemented by UserProfileService and UserAWSService
@RequestMapping("/api/v1/")
@Api(value = "UserProfile", description = "UserProfile Profile")
public class UserController {


    private UserProfileService userProfileService;

    // autowired must be used on constructor
    @Autowired
    public UserController(UserProfileService userProfileService) {
        this.userProfileService = userProfileService;
    }

    public void setUserProfileService(UserProfileService userProfileService) {
        this.userProfileService = userProfileService;
    }

    @ApiOperation(value = "Save a userProfile")
    @PostMapping(value = "userprofile")
    public ResponseEntity<?> saveUserProfile( @ApiParam(value = "UserProfile will be saved in database" +
            " table", required = true)@RequestBody UserProfile userProfile) throws UserProfileAlreadyExistException {
            return new ResponseEntity<UserProfile>(userProfileService.saveUserProfile(userProfile), HttpStatus.OK);
    }

    @GetMapping(value = "userprofile/{username}")
    public ResponseEntity<?> getUserProfile(@PathVariable("username") String userName) throws UserProfileNotFoundException {
        return new ResponseEntity<UserProfile>(userProfileService.getUser(userName), HttpStatus.OK);
    }

    @ApiOperation(value = "List of interest")
    @GetMapping(value = "interests/{username}")
    public ResponseEntity<?> getInterests(@PathVariable("userName") String userName) throws Exception{
            List<String> user = userProfileService.getInterests(userName);
            return new ResponseEntity<List<String>>(user, HttpStatus.OK);
    }

    @ApiOperation(value = "List of interest")
    @PostMapping(value = "interests/{username}")
    public ResponseEntity<?> editInterests(@PathVariable("username") String userName, @RequestBody List<String> newInterests) throws Exception{
        List<String> interests = userProfileService.editInterests(userName, newInterests);
        return new ResponseEntity<List<String>>(interests, HttpStatus.OK);
    }

    @ApiOperation(value = "Delete a user")
    @DeleteMapping(value = "{username}")
    public ResponseEntity<?> deleteUserProfile( @ApiParam(value = "UserProfile with Id will be deleted from database " +
            "table", required = true)@PathVariable("userName") String userName) throws UserProfileNotFoundException {
            return new ResponseEntity<Boolean>(userProfileService.deleteUser(userName), HttpStatus.OK);
    }

    @PostMapping(value = "password/{username}")
    public ResponseEntity<?> changePassword(@PathVariable("username") String userName, @RequestBody String newPassword) throws UserProfileNotFoundException {
        return new ResponseEntity<UserProfile>(userProfileService.changePassword(userName, newPassword), HttpStatus.OK);
    }

    @PostMapping(value = "questionattempted/{username}")
    public ResponseEntity<UserProfile> updateQuestionAttempted(@PathVariable("username") String userName, @RequestBody Question question) {
        return new ResponseEntity<UserProfile>(userProfileService.updateQuestionAttempted(userName, question), HttpStatus.OK);
    }

    @PostMapping(value = "questionposted/{username}")
    public ResponseEntity<UserProfile> updateQuestionPosted(@PathVariable("username") String userName, @RequestBody Question question) {
        return new ResponseEntity<UserProfile>(userProfileService.updateQuestionPosted(userName, question), HttpStatus.OK);
    }

    @GetMapping(value = "hi")
    public ResponseEntity<String> hi() {
        return new ResponseEntity<>("UserProfile Controller is runnig", HttpStatus.OK);
    }
}

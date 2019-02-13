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

    @GetMapping(value = "userprofile/{id}")
    public ResponseEntity<?> getUserProfile(@PathVariable("id") int id) throws UserProfileNotFoundException {
        return new ResponseEntity<UserProfile>(userProfileService.getUser(id), HttpStatus.OK);
    }

    @ApiOperation(value = "List of interest")
    @GetMapping(value = "interests/{id}")
    public ResponseEntity<?> getInterests(@PathVariable("id") int id) throws Exception{
            List<String> user = userProfileService.getInterests(id);
            return new ResponseEntity<List<String>>(user, HttpStatus.OK);
    }

    @ApiOperation(value = "List of interest")
    @PostMapping(value = "interests/{id}")
    public ResponseEntity<?> editInterests(@PathVariable("id") int id, @RequestBody List<String> newInterests) throws Exception{
        List<String> interests = userProfileService.editInterests(id, newInterests);
        return new ResponseEntity<List<String>>(interests, HttpStatus.OK);
    }

    @ApiOperation(value = "Delete a user")
    @DeleteMapping(value = "{id}")
    public ResponseEntity<?> deleteUserProfile( @ApiParam(value = "UserProfile with Id will be deleted from database " +
            "table", required = true)@PathVariable("id") String id) throws UserProfileNotFoundException {
            return new ResponseEntity<Boolean>(userProfileService.deleteUser(Integer.parseInt(id)), HttpStatus.OK);
    }

    @PostMapping(value = "password/{id}")
    public ResponseEntity<?> changePassword(@PathVariable("id") int id, @RequestBody String newPassword) throws UserProfileNotFoundException {
        return new ResponseEntity<UserProfile>(userProfileService.changePassword(id, newPassword), HttpStatus.OK);
    }

    @PostMapping(value = "questionattempted/{id}")
    public ResponseEntity<UserProfile> updateQuestionAttempted(@PathVariable("id") int id, @RequestBody Question question) {
        return new ResponseEntity<UserProfile>(userProfileService.updateQuestionAttempted(id, question), HttpStatus.OK);
    }

    @PostMapping(value = "questionposted/{id}")
    public ResponseEntity<UserProfile> updateQuestionPosted(@PathVariable("id") int id, @RequestBody Question question) {
        return new ResponseEntity<UserProfile>(userProfileService.updateQuestionPosted(id, question), HttpStatus.OK);
    }

    @GetMapping(value = "hi")
    public ResponseEntity<String> hi() {
        return new ResponseEntity<>("UserProfile Controller is runnig", HttpStatus.OK);
    }
}

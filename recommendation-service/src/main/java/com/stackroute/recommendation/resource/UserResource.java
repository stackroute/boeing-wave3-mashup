package com.stackroute.recommendation.resource;

import com.stackroute.recommendation.model.Question;
import com.stackroute.recommendation.model.User;
import com.stackroute.recommendation.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest/neo4j")
@CrossOrigin("*")
public class UserResource {

    @Autowired
    UserService userService;


    @GetMapping(value = "users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(value = "questions")
    public List<Question> getAllQuestions(){
        return userService.getAllQuestions();
    }

    @PostMapping(value = "user")
    public ResponseEntity<?> saveUser(@RequestBody User user){

        ResponseEntity responseEntity;

        User user1 = userService.createUserNode(user);
        responseEntity = new ResponseEntity<User>(user1,HttpStatus.CREATED);

        return responseEntity;
    }

    @PostMapping(value = "question")
    public ResponseEntity<?> saveQuestion(@RequestBody Question question){

        ResponseEntity responseEntity;
        Question question1 = userService.createQuestionNode(question);
        responseEntity = new ResponseEntity<Question>(question1,HttpStatus.CREATED);

        return responseEntity;
    }

    @PutMapping(value = "userupdate")
    public ResponseEntity<?> updateUser(@RequestBody User user){
        ResponseEntity responseEntity;
        User user1 = userService.updateUserNode(user);
        responseEntity = new ResponseEntity<User>(user1,HttpStatus.ACCEPTED);
        return responseEntity;
    }

    @PutMapping(value = "questionupdate")
    public ResponseEntity<?> updateQuestion(@RequestBody Question question){
        ResponseEntity responseEntity;
        Question question1 = userService.updateQuestionNode(question);
        responseEntity = new ResponseEntity<Question>(question1,HttpStatus.ACCEPTED);
        return responseEntity;
    }

    @DeleteMapping(value = "userdelete")
    public ResponseEntity<?> deleteUser(@RequestBody User user){
        ResponseEntity responseEntity;
        User user1 = userService.deleteUser(user);
        responseEntity = new ResponseEntity<User>(user1,HttpStatus.ACCEPTED);
        return responseEntity;
    }

    @DeleteMapping(value = "questiondelete")
    public ResponseEntity<?> deleteQuestion(@RequestBody Question question){
        ResponseEntity responseEntity;
        Question question1 = userService.deleteQuestion(question);
        responseEntity = new ResponseEntity<Question>(question1,HttpStatus.ACCEPTED);
        return responseEntity;
    }

    @PostMapping(value = "relationship/{emailId}/{questionId}")
    public ResponseEntity<?> addNewRelationship(@PathVariable String emailId,@PathVariable String questionId){
        ResponseEntity responseEntity;

        responseEntity = new ResponseEntity<String>(userService.addNewRelationship(emailId,questionId), HttpStatus.OK);

        return responseEntity;
    }


    @GetMapping(value = "attempted")
    public ResponseEntity <?> getQuestionsBasedOnAttempts(@RequestBody User user){

        ResponseEntity responseEntity;


        responseEntity = new ResponseEntity<List<Question>>(userService.recommendOnAttempts(user),HttpStatus.OK);

        return responseEntity;
    }

    @GetMapping(value = "interest")
    public ResponseEntity <?> getQuestionsBasedOnInterests(@RequestBody User user){

        ResponseEntity responseEntity;


        responseEntity = new ResponseEntity<List<Question>>(userService.recommendOnInterest(user),HttpStatus.OK);

        return responseEntity;
    }
}

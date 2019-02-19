package com.stackroute.controller;

import com.stackroute.domain.Questions;
import com.stackroute.exceptions.QuestionAlreadyExistsException;
import com.stackroute.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.util.concurrent.ListenableFuture;
import org.springframework.web.bind.annotation.*;



//Main controller
@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/")
public class QuestionController {

    private QuestionService questionService;
    KafkaTemplate<String, Questions> kafkaTemplate;


    @Autowired
    public QuestionController(QuestionService questionService,KafkaTemplate<String, Questions> kafkaTemplate) {
        this.questionService = questionService;
        this.kafkaTemplate=kafkaTemplate;
    }

  //  @Autowired
    @PostMapping("question")
    public ResponseEntity<?> saveQuestions(@RequestBody Questions question) {

        System.out.println(question);

        try {
            Questions question1 = questionService.saveQuestion(question);
            kafkaTemplate.send("QuestionMessage",question1);
            return new ResponseEntity<String>("Successfully saved", HttpStatus.OK);
        }
        catch(QuestionAlreadyExistsException ex){
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.CONFLICT);
        }
    }
}

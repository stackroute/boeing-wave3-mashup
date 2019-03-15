package com.stackroute.controller;

import com.stackroute.domain.Code;
import com.stackroute.domain.Question;
import com.stackroute.domain.User;
import com.stackroute.service.FetchService;
import com.stackroute.service.ResultsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;


@RestController
@RequestMapping("api/v1/")
@CrossOrigin("*")
public class QuestionController {
    @Autowired
    private ResultsService resultsService;
    @Autowired
    public FetchService fetchService;
    @Autowired
    private RestTemplate restTemplate;
    @Autowired


    public QuestionController() {
    }


    @PutMapping(value="/question/{username}")
    public  ResponseEntity<?> getQuestionObject(@PathVariable String username,@RequestBody Question question) {

    System.out.println(question.gitUrl);



        fetchService.setGiturl1(question.gitUrl);
        fetchService.setUsername(username);
            try{
                   Code code=new Code();
                   code.setCodeTemplate(fetchService.fetchFilesAndSave());
          return new ResponseEntity<Code>(code,HttpStatus.CREATED);
            }

            catch(Exception e){

            }

    return null;
    }

}
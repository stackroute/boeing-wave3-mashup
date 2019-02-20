package com.stackroute.controller;
import com.stackroute.service.FetchService;
import com.stackroute.service.FileWriterService;
import com.stackroute.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;


@RestController
@RequestMapping("api/v1/")
@CrossOrigin("*")
public class QuestionController {
    @Autowired
    private QuestionService questionService;
    public QuestionService getQuestionService() {
        return questionService;
    }
    @Autowired
    public FetchService fetchService;

    public void setQuestionService(QuestionService questionService) {
        this.questionService = questionService;
    }
    @RequestMapping(value = "code", method = RequestMethod.POST)
    public ResponseEntity<String> saveTrack(@RequestBody String code) {
        ResponseEntity responseEntity;
        String code1= questionService.run(code);
        responseEntity=new ResponseEntity<String>(code1, HttpStatus.CREATED);
        return responseEntity;
    }
//        In future we have to listen it from kafka via questionPopulator
    @RequestMapping (value="post",method = RequestMethod.POST)
    public ResponseEntity<String> PostAgitURL(@RequestBody String giturl) throws IOException,InterruptedException {
            ResponseEntity responseEntity;
            questionService.setGitURL(giturl);
            fetchService.fetchFilesAndSave();
            responseEntity=new ResponseEntity(HttpStatus.ACCEPTED);
//        repository="https://github.com/aroranamita09/ArrayListOperation.git"
        return responseEntity;
    }
}
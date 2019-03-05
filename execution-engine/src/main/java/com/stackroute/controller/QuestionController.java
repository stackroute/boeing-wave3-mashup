package com.stackroute.controller;
//import com.netflix.appinfo.InstanceInfo;
//import com.netflix.discovery.EurekaClient;
//import com.netflix.discovery.shared.Application;
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
//    private EurekaClient eurekaClient;
//    @Autowired
    //public Question question = new Question();

    public QuestionController() {
    }

//    @Autowired
//    public QuestionController(ResultsService resultsService, FetchService fetchService, RestTemplate restTemplate, Question question,EurekaClient eurekaClient) {
//        this.resultsService = resultsService;
//        this.fetchService = fetchService;
//        this.restTemplate = restTemplate;
//        this.question = question;
//
//    }


//    public ResponseEntity<?> getFiles(@RequestBody Question question) throws IOException,InterruptedException{
////        fetchService.setGiturl1(question.gitUrl);
////        fetchService.setUsername(question.username);
//        fetchService.fetchFilesAndSave();
//        return new ResponseEntity<String>("request successfully transmitted ", HttpStatus.CREATED);
//    }

    ///home/user/boeing-wave3-mashup/execution-engine/src/main/java/com/stackroute/controller/QuestionController.java

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
package com.stackroute.controller;
import com.netflix.appinfo.InstanceInfo;
import com.netflix.discovery.EurekaClient;
import com.netflix.discovery.shared.Application;
import com.stackroute.domain.Question;
import com.stackroute.service.FetchService;
import com.stackroute.service.FileWriterService;
import com.stackroute.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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
    private QuestionService questionService;
    public QuestionService getQuestionService() {
        return questionService;
    }
    @Autowired
    public FetchService fetchService;

<<<<<<< HEAD
    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private EurekaClient eurekaClient;

    public void setResultsService(ResultsService resultsService) {
        this.resultsService = resultsService;
    }
    public Question question;

    @RequestMapping(value="question/{id}", method = RequestMethod.GET)
    public Question getQuestionObject(@PathVariable int id) {
            Application application = eurekaClient.getApplication("QUESTION-SERVICE1");
        System.out.println("Application : " + application);
        InstanceInfo instanceInfo = application.getInstances().get(0);
        System.out.println("Inst : " + instanceInfo);
        String url = "http://" + instanceInfo.getIPAddr() + ":" + instanceInfo.getPort() + "/" + "api/v1/question/" + id;
        System.out.println("URL" + url);
         question = restTemplate.getForObject(url, Question.class);
        System.out.println("RESPONSE " + question.questionTitle);
        fetchService.setGitURL(question.gitUrl);
        return question;
=======
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
    public ResponseEntity<String> PostAgitURL(@RequestBody String giturl) throws IOException {
            ResponseEntity responseEntity;
            questionService.setGitURL(giturl);
            fetchService.fetchFilesAndSave();
            responseEntity=new ResponseEntity(HttpStatus.ACCEPTED);
//        repository="https://github.com/aroranamita09/ArrayListOperation.git"
        return responseEntity;
>>>>>>> be4fb5dbe67d8faf4d135bb1f6d6bcc49320df9b
    }

}
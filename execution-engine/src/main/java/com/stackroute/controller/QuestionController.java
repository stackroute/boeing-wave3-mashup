package com.stackroute.controller;
import com.netflix.appinfo.InstanceInfo;
import com.netflix.discovery.EurekaClient;
import com.netflix.discovery.shared.Application;
import com.stackroute.domain.Question;
import com.stackroute.service.FetchService;
import com.stackroute.service.ResultsService;
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
    private ResultsService resultsService;
    public ResultsService getResultsService() {
        return resultsService;
    }
    @Autowired
    public FetchService fetchService;

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private EurekaClient eurekaClient;

    public void setResultsService(ResultsService resultsService) {
        this.resultsService = resultsService;
    }
    public Question question;

//    @GetMapping(username){
//
//    }
    @RequestMapping(value="question/{id}/{username}", method = RequestMethod.GET)
    public String getQuestionObject(@PathVariable int id,@PathVariable String username) {
        Application application = eurekaClient.getApplication("QUESTION-SERVICE1");
        System.out.println("Application : " + application);
        InstanceInfo instanceInfo = application.getInstances().get(0);
        System.out.println("Inst : " + instanceInfo);
        String url = "http://" + instanceInfo.getIPAddr() + ":" + instanceInfo.getPort() + "/" + "api/v1/question/" + id;
        System.out.println("URL" + url);
        question = restTemplate.getForObject(url, Question.class);
        System.out.println("RESPONSE " + question.questionTitle);
        fetchService.setGiturl1(question.gitUrl);
        fetchService.setUsername(username);
            try{
          return  fetchService.fetchFilesAndSave();
            }

            catch(Exception e){

            }

    return null;
    }

}
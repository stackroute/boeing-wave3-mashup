package com.stackroute.controller;
import com.netflix.appinfo.InstanceInfo;
import com.netflix.discovery.EurekaClient;
import com.netflix.discovery.shared.Application;
import com.stackroute.domain.Question;
import com.stackroute.service.FetchService;
import com.stackroute.service.ResultsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;


@RestController
@RequestMapping("api/v1/")
@CrossOrigin("*")
public class QuestionController {

    private ResultsService resultsService;
    public FetchService fetchService;
    private RestTemplate restTemplate;
    private EurekaClient eurekaClient;
    public Question question;

    public QuestionController() {
    }

    public QuestionController(ResultsService resultsService, FetchService fetchService, RestTemplate restTemplate, Question question,EurekaClient eurekaClient) {
        this.resultsService = resultsService;
        this.fetchService = fetchService;
        this.restTemplate = restTemplate;
        this.question = question;
    }

    @GetMapping(value="question/{id}/{username}")
    public String getQuestionObject(@PathVariable int id,@PathVariable String username) {
        System.out.println("inside the getQuestionObject() ");
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
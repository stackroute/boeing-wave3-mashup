package com.stackroute.controller;

import com.netflix.appinfo.InstanceInfo;
import com.netflix.discovery.EurekaClient;
import com.netflix.discovery.shared.Application;
import com.stackroute.domain.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RefreshScope
@RestController
@RequestMapping(value = "/api/v1/")
public class QuestionController {

    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private EurekaClient eurekaClient;

//    method to call question service controller
    @RequestMapping("question/{tag}")
    public void getQuestionByTag(@PathVariable String tag) {
        Application application = eurekaClient.getApplication("QUESTION-SERVICE1");
        System.out.println("App : " + application);
        InstanceInfo instanceInfo = application.getInstances().get(0);
        System.out.println("Inst : " + instanceInfo);
        String url = "http://" + instanceInfo.getIPAddr() + ":" + instanceInfo.getPort() + "/" + "api/v1/questions/" + tag;
        System.out.println("URL" + url);
        List<Question> ques = restTemplate.getForObject(url, List.class);
        System.out.println("RESPONSE " + ques);
    }
}
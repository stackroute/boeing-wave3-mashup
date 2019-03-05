package com.stackroute.controller;

import com.stackroute.domain.Code;
import com.stackroute.domain.User;
import com.stackroute.service.QuestionService;
import com.stackroute.service.ResultsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/v1/")
@CrossOrigin("*")
public class WebController {

    public ResultsService getResultsService() {
        return resultsService;
    }

    public void setResultsService(ResultsService resultsService) {
        this.resultsService = resultsService;
    }

    @Autowired
    private ResultsService resultsService;

    @MessageMapping("/hello")
    @SendTo("/topic/hi")
    public Code greeting(User user) throws Exception {
        String response=this.resultsService.run(user.getName());
        System.out.println(response);

        return new Code(response);
    }
}

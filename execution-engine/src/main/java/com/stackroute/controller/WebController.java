package com.stackroute.controller;

import com.stackroute.domain.Code;
import com.stackroute.domain.User;
import com.stackroute.service.QuestionService;
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

    @Autowired
    private QuestionService questionService;
    public QuestionService getQuestionService() {
        return questionService;
    }

    public void setQuestionService(QuestionService questionService) {
        this.questionService = questionService;
    }

//    @PostMapping("/post")
//    public Code greeting2(User user) throws Exception {
//        String response=this.questionService.run(user.getName());
//        System.out.println(response);
//
//        return new Code(response);
//    }
    @MessageMapping("/hello")
    @SendTo("/topic/hi")
    public Code greeting(User user) throws Exception {
        String response=this.questionService.run(user.getName());
        System.out.println(response);

        return new Code(response);
    }
}

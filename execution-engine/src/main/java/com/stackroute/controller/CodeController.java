package com.stackroute.controller;

import com.stackroute.domain.Hello;
import com.stackroute.domain.User;
import com.stackroute.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;



@Controller
public class CodeController {

    @Autowired
    private QuestionService questionService;
    public QuestionService getQuestionService() {
        return questionService;
    }

    public void setQuestionService(QuestionService questionService) {
        this.questionService = questionService;
    }
<<<<<<< HEAD:execution-engine/src/main/java/com/stackroute/controller/CodeController.java
    @MessageMapping("/results")
    @SendTo("/topic/results")
    public Code sendResults(codeWrittenFromEditor sumittedCode) throws Exception {
        String temp=this.resultsService.run(sumittedCode.getCodeWritten());
        System.out.println(temp);
        return new Code(temp);
    }
//        This should work after submitting code
    @RequestMapping(value = "code", method = RequestMethod.POST)
    public ResponseEntity<String> Publishresults(@RequestBody String code) {
        ResponseEntity responseEntity;
        String code1= resultsService.run(code);
        responseEntity=new ResponseEntity<String>(code1, HttpStatus.CREATED);
        return responseEntity;
=======

    @MessageMapping("/hello")
    @SendTo("/topic/hi")
    public Hello  greeting(User user) throws Exception {
        String response=this.questionService.run(user.getName());
        System.out.println(response);

        return new Hello(response);
>>>>>>> be4fb5dbe67d8faf4d135bb1f6d6bcc49320df9b:execution-engine/src/main/java/com/stackroute/controller/WebController.java
    }
}

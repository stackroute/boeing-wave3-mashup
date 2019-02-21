package com.stackroute.controller;

import com.stackroute.domain.Code;
import com.stackroute.domain.codeWrittenFromEditor;
import com.stackroute.service.ResultsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;


//This is for front end socket
@Controller
public class WebController {

    @Autowired
    private ResultsService resultsService;
    public ResultsService getResultsService() {
        return resultsService;
    }

    public void setResultsService(ResultsService resultsService) {
        this.resultsService = resultsService;
    }

    @MessageMapping("/template")
    @SendTo("/topic/template")
    public Code sendTemplate(Code code) throws Exception {
        String temp=this.resultsService.run(codeWrittenFromEditor.);
        System.out.println(temp);

        return new Code(temp);
    }
    @MessageMapping("/results")
    @SendTo("/topic/results")
    public Code sendResults(codeWrittenFromEditor user) throws Exception {
        String response=this.resultsService.run(user.getName());
        System.out.println(response);

        return new Code(response);
    }
}

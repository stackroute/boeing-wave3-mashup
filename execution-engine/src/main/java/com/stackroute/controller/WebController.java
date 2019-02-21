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
        System.out.println(code.getCodeTemplate());

        return new Code(code.getCodeTemplate());
    }
    @MessageMapping("/results")
    @SendTo("/topic/results")
    public Code sendResults(codeWrittenFromEditor sumittedCode) throws Exception {
        String temp=this.resultsService.run(sumittedCode.getCodeWritten());
        System.out.println(temp);

        return new Code(temp);

    }
}

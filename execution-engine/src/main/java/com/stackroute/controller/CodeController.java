package com.stackroute.controller;

import com.stackroute.domain.Code;
import com.stackroute.domain.codeWrittenFromEditor;
import com.stackroute.service.ResultsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


//This is for front end socket
@Controller
public class CodeController {

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
    @MessageMapping("/hello")
    @SendTo("/topic/hi")
    public Code sendResults(codeWrittenFromEditor sumittedCode) throws Exception {
        System.out.println(sumittedCode.getCodeWritten());
        String temp=this.resultsService.run(sumittedCode.getCodeWritten());
        System.out.println(temp+"vfvfd");
        return new Code(temp);
    }
//        This should work after submitting code
    @RequestMapping(value = "code", method = RequestMethod.POST)
    public ResponseEntity<String> Publishresults(@RequestBody String code) {
        ResponseEntity responseEntity;
        String code1= resultsService.run(code);
        responseEntity=new ResponseEntity<String>(code1, HttpStatus.CREATED);
        return responseEntity;
    }
}

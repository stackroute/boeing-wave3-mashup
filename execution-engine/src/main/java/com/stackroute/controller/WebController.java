package com.stackroute.controller;
import org.springframework.messaging.simp.SimpMessagingTemplate;
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




    private void setTemplate(SimpMessagingTemplate template){
        this.template=template;
    }
    @Autowired
    private  SimpMessagingTemplate template;

    public ResultsService getResultsService() {
        return resultsService;
    }

    public void setResultsService(ResultsService resultsService) {
        this.resultsService = resultsService;
    }

    @Autowired
    private ResultsService resultsService;

    @MessageMapping("/hello")
    public void greeting(User user) throws Exception {
        String response=this.resultsService.run(user.getName());
        System.out.println(response);
        this.template.convertAndSend("/topic", new Code(response));

    }
}

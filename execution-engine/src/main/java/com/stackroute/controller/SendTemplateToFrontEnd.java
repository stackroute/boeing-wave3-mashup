package com.stackroute.controller;

import com.stackroute.domain.Question;
import com.stackroute.service.FetchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping(value="api/v1/")
@CrossOrigin("*")
public class SendTemplateToFrontEnd {
    @Autowired
    public FetchService fetchService;\
    @Autowired
    public SendTemplateToFrontEnd sendTemplateToFrontEnd;

//    its getting posted from front end for submisssion service
    @RequestMapping(value="template",method=RequestMethod.POST)
    public ResponseEntity<String> getQuestionDataFromFrontEnd(@RequestBody String giturl)
    {
        ResponseEntity responseEntity;
//    questionService.setGitURL(giturl);
    responseEntity=new ResponseEntity(HttpStatus.ACCEPTED);
//        repository="https://github.com/aroranamita09/ArrayListOperation.git"
    return responseEntity;
    }

//    @MessageMapping("/hello")
//    @SendTo("/topic/hi")
//    public String template(Question question) throws Exception {
//        String template=sendTemplateToFrontEnd.;
//        System.out.println(template);


    }
}

//
//package com.stackroute.codeexecutorengine.controller;
//
//        import com.stackroute.codeexecutorengine.service.FetchService;
//        import com.stackroute.codeexecutorengine.service.FileWriterService;
//        import org.springframework.beans.factory.annotation.Autowired;
//        import org.springframework.web.bind.annotation.CrossOrigin;
//        import org.springframework.web.bind.annotation.RequestMapping;
//        import org.springframework.web.bind.annotation.RestController;
//
//        import java.io.IOException;
//
//@RestController
//@RequestMapping(value="api/v1/")
//@CrossOrigin("*")
//public class FetchController {
//    @Autowired
//    public FetchService fetchService;
//    @Autowired
//    public FileWriterService fileWriterService;
//    public void setFetchService(FetchService fetchservice) {
//        this.fetchService = fetchservice;
//    }
//    @RequestMapping(value = "fetch")
//    public void getFiles() throws IOException {
////        fetchService.fetchFilesAndSave();
//        fileWriterService.fileWriter();
//
//    }
//}
//@RequestMapping (value="post",method = RequestMethod.POST)
//public ResponseEntity<String> PostAgitURL(@RequestBody String giturl){
//    ResponseEntity responseEntity;
//    questionService.setGitURL(giturl);
//    responseEntity=new ResponseEntity(HttpStatus.ACCEPTED);
////        repository="https://github.com/aroranamita09/ArrayListOperation.git"
//    return responseEntity;
//}






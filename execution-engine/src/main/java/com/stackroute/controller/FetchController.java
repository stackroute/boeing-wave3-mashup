package com.stackroute.controller;

//import com.stackroute.service.FetchBoilerPlateService;
import com.stackroute.domain.Question;
import com.stackroute.service.FetchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

//This controller only brings files from git url and saves to local folder

@RestController
@RequestMapping(value="api/v1/")
@CrossOrigin("*")
public class FetchController {

    public FetchService fetchService;

    @Autowired
    public void setFetchService(FetchService fetchservice) {
        this.fetchService = fetchservice;
    }

    @PostMapping("fetch")
    public ResponseEntity<?> getFiles(@RequestBody Question question) throws IOException,InterruptedException{
//        fetchService.setGiturl1(question.gitUrl);
//        fetchService.setUsername(question.username);
        fetchService.fetchFilesAndSave();
        return new ResponseEntity<String>("request successfully transmitted ",HttpStatus.CREATED);
    }

}


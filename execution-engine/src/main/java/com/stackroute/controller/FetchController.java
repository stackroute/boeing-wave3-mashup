package com.stackroute.controller;

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
    @Autowired
    public FetchService fetchService;

    public void setFetchService(FetchService fetchservice) {
        this.fetchService = fetchservice;
    }
    @RequestMapping(value = "fetch", method = RequestMethod.GET)
    public ResponseEntity<String> getFiles() throws IOException,InterruptedException{
        fetchService.fetchFilesAndSave();
//        String code1= resultsService.run(code);
        return new ResponseEntity<String>("Done",HttpStatus.CREATED);
    }

}


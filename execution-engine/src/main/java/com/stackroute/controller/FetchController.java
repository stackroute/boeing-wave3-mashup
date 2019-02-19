package com.stackroute.controller;

import com.stackroute.service.FetchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    @RequestMapping(value = "fetch")
    public void getFiles() throws IOException {
        fetchService.fetchFilesAndSave();
    }

}


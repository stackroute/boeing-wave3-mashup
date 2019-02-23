package com.stackroute.controllers;

import com.stackroute.domain.SubmissionData;
import com.stackroute.service.SubmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/")
public class SubmissionController {

    private SubmissionService submissionService;

    @Autowired
    public SubmissionController(SubmissionService submissionService) {
        this.submissionService = submissionService;
    }

    @PostMapping(value = "submission")
    public ResponseEntity<SubmissionData> saveSubmissions(@RequestBody SubmissionData submissionData){
        System.out.println("DATA : "+submissionData.toString());
        SubmissionData submissionData1 = submissionService.saveSubmission(submissionData);
        return new ResponseEntity<SubmissionData>(submissionData1, HttpStatus.OK);
    }

    @GetMapping(value = "submission/{username}/{questionId}")
    public ResponseEntity<?> getSubmissions(@PathVariable("username") String username, @PathVariable("questionId") int questionId){
        SubmissionData submissionData = submissionService.getSubmission(username,questionId);
        return new ResponseEntity<SubmissionData>(submissionData,HttpStatus.OK);
    }
}

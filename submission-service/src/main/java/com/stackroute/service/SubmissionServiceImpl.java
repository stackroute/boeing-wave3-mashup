package com.stackroute.service;

import com.stackroute.domain.SubmissionData;
import com.stackroute.repository.SubmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class SubmissionServiceImpl implements SubmissionService{

    static final double easy = 10;
    static final double medium = 20;
    static final double hard = 30;

    private SubmissionRepository submissionRepository;
    private KafkaTemplate<String, SubmissionData> kafkaTemplate;

    @Autowired
    public SubmissionServiceImpl(SubmissionRepository submissionRepository, KafkaTemplate<String, SubmissionData> kafkaTemplate) {
        this.submissionRepository = submissionRepository;
        this.kafkaTemplate = kafkaTemplate;
    }

    //Method to save the submission data into the database
    @Override
    public SubmissionData saveSubmission(SubmissionData submissionData) {
        double level;
        if(submissionData.getDifficulty().equals("easy")){
            level = easy;
        }
        else if(submissionData.getDifficulty().equals("medium")){
            level = medium;
        }
        else{
            level = hard;
        }
        Double score1 = (submissionData.getTestCasePassed()/submissionData.getTotalTestCases())*level;
        submissionData.setScore(score1);
        kafkaTemplate.send("SubmissionMessage",submissionData);
        SubmissionData submissionObj = submissionRepository.save(submissionData);
        return submissionObj;
    }

    //Method to fetch data on the basis of username and questionId from database
    @Override
    public SubmissionData getSubmission(String username, int questionId) {
        SubmissionData submissionObj1 = submissionRepository.getSubmissionDataByUsernameAndQuestionId(username,questionId);
        return submissionObj1;
    }
}

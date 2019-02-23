package com.stackroute.service;

import com.stackroute.domain.SubmissionData;
import com.stackroute.repository.SubmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class SubmissionServiceImpl implements SubmissionService{

    private SubmissionRepository submissionRepository;

    static final double easy = 10;
    static final double medium = 20;
    static final double hard = 30;

    @Autowired
    public SubmissionServiceImpl(SubmissionRepository submissionRepository) {
        this.submissionRepository = submissionRepository;
    }

    @Autowired
    KafkaTemplate<String, SubmissionData> kafkaTemplate;

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
        System.out.println("Level : " + level);
        Double score1 = (submissionData.getTestCasePassed()/submissionData.getTotalTestCases())*level;
        submissionData.setScore(score1);
        kafkaTemplate.send("SubmissionMessage",submissionData);
        SubmissionData submissionObj = submissionRepository.save(submissionData);
        return submissionObj;
    }

    @Override
    public SubmissionData getSubmission(String username, int questionId) {
        SubmissionData submissionObj1 = submissionRepository.getSubmissionDataByUsernameAndQuestionId(username,questionId);
        return submissionObj1;
    }
}

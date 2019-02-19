//package com.stackroute.submission.service;
//
//import com.stackroute.submission.repository.SubmissionRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.kafka.annotation.KafkaListener;
//import org.springframework.stereotype.Service;
//
//@Service
//public class KafkaListenerService {
//
//    @Autowired
//    private SubmissionRepository submissionRepository;
//
//    public KafkaListenerService(SubmissionRepository submissionRepository) {
//        this.submissionRepository = submissionRepository;
//    }
//
//    @KafkaListener(topics = "submissionDetail",groupId = "group_id_submission")
//    public void consume(String message){
//        System.out.println("Consumed msg : " + message);
//    }
//}

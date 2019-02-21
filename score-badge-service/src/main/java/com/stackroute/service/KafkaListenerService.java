package com.stackroute.service;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

/*Service for kafka*/
@Service
public class KafkaListenerService {

    @KafkaListener(topics = "SubmissionMessage", groupId = "group_id")
    public void consume(String message){
        System.out.println("Consumed msg : " + message);
    }
}

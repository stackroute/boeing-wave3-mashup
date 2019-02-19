package com.stackroute.recommend.service;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaListenerService {

    @KafkaListener(topics = "QuestionMessage", groupId = "group_id")
    public void consume(String message){
        System.out.println("Consumed msg : " + message);
    }
}
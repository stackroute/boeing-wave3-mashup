package com.stackroute.service;

import com.stackroute.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaListenerService {

    @Autowired
    UserProfileRepository userRepository;

    @KafkaListener(topics = "AuthMessage", groupId = "group_id")
    public void consume(String message){
        System.out.println("Consumed msg : " + message);
    }
}
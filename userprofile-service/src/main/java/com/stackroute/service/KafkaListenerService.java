package com.stackroute.service;

import com.stackroute.domain.UserProfile;
import com.stackroute.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaListenerService {

    @Autowired
    UserProfileRepository userRepository;

    @KafkaListener(topics = "AuthMessage", groupId = "group_id_up")
    public void consume(String message){
        String [] strMessage = message.split(",");
        UserProfile userProfile = new UserProfile();
        userProfile.setFirstName(strMessage[6].split(":")[1].replace("\"",""));
        userProfile.setLastName(strMessage[7].split(":")[1].replace("\"",""));
        userProfile.setEmailId(strMessage[11].split(":")[1].replace("\"",""));
        userProfile.setUserName(strMessage[0].split(":")[1].replace("\"",""));
        userProfile.setPassword(strMessage[1].split(":")[1].replace("\"",""));
        System.out.println(userProfile.getFirstName());
        System.out.println(userProfile.getLastName());
        System.out.println(userProfile.getEmailId());
        System.out.println(userProfile.getPassword());
        System.out.println(userProfile.getUserName());
        userRepository.save(userProfile);
        System.out.println("Consumed msg : " + message);
    }

    @KafkaListener(topics = "QuestionMessage", groupId = "group_id_up")
    public void consume_ques(String message){
        System.out.println("Consumed msg : " + message);
    }
}
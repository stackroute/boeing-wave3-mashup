package com.stackroute.service;

import com.stackroute.domain.Question;
import com.stackroute.domain.UserProfile;
import com.stackroute.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
        userProfile.setAge(Integer.parseInt(strMessage[2].split(":")[1].replace("\"","")));
        userProfile.setGender(strMessage[3].split(":")[1].replace("\"",""));
        userProfile.setComapny(strMessage[4].split(":")[1].replace("\"",""));
        userProfile.setCourse(strMessage[5].split(":")[1].replace("\"",""));
        userProfile.setDiscipline(strMessage[9].split(":")[1].replace("\"",""));
        userProfile.setCollege(strMessage[12].split(":")[1].replace("\"",""));
        List<String> interest = new ArrayList<>();
        interest.add(strMessage[8].split(":")[1].replace("\"",""));
        userProfile.setInterests(interest);
        List<Question> attemptedQuestion = new ArrayList<>();
        userProfile.setAttemptedQuestion(attemptedQuestion);
        List<Question> postedQuestion = new ArrayList<>();
        userProfile.setPostedQuestion(postedQuestion);
        userRepository.save(userProfile);
        System.out.println("Consumed msg : " + message);
    }

    @KafkaListener(topics = "QuestionMessage", groupId = "group_id_up")
    public void consume_ques(String message){

        System.out.println("Consumed msg : " + message);
    }
}
package com.stackroute.recommendation.service;

import com.stackroute.recommendation.model.Question;
import com.stackroute.recommendation.model.User;
import com.stackroute.recommendation.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.getAllUsers();
    }


    public List<Question> getAllQuestions(){
        return userRepository.getAllQuestions();
    }


    public User createUserNode(User user){
        return userRepository.saveUser(user.getId(),user.getEmailId(),user.getInterests());
    }

    public Question createQuestionNode(Question question){
        return userRepository.saveQuestion(question.getQuestionId(),question.getQuestionTitle(),question.getDifficulty(),question.getTags());
    }

    public User updateUserNode(User user){
        return userRepository.updateUserNode(user.getEmailId(),user.getEmailId(),user.getInterests());
    }

    public Question updateQuestionNode(Question question){
        return userRepository.updateQuestionNode(question.getQuestionId(),question.getQuestionTitle(),question.getDifficulty(),question.getTags());
    }

    public User deleteUser(User user){
        return userRepository.deleteUser(user.getEmailId());
    }

    public Question deleteQuestion(Question question){
        return userRepository.deleteQuestion(question.getQuestionId());
    }

    public String addNewRelationship(String emailId,String questionId){
        userRepository.addNewRelationship(emailId,questionId);
        return "hello";
    }

    public List<Question> recommendOnAttempts(User user){
        return userRepository.recommendOnAttempts(user.getEmailId());

    }

    public List<Question> recommendOnInterest(User user){
        return  userRepository.recommendOnInterest(user.getInterests());
    }
}

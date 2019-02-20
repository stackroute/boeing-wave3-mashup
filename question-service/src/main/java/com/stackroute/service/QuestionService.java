package com.stackroute.service;

import com.stackroute.domain.Questions;
import com.stackroute.exceptions.QuestionAlreadyExistsException;
import com.stackroute.exceptions.QuestionNotPresentException;

import java.util.ArrayList;

/*question service interface*/
public interface QuestionService {

    //method to save question
    Questions saveQuestion(Questions question) throws QuestionAlreadyExistsException;

    //method to get question by Id
    Questions getQuestionById() throws QuestionNotPresentException;

    //method to get question objects by tag
    ArrayList<Questions> getQuestionByTag() throws QuestionNotPresentException;
}

package com.stackroute.service;

import com.stackroute.domain.Questions;
import com.stackroute.exceptions.QuestionAlreadyExistsException;

/*question service interface*/
public interface QuestionService {

    Questions saveQuestion(Questions question) throws QuestionAlreadyExistsException;

}

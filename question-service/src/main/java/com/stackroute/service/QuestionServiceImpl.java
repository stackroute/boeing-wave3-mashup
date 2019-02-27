package com.stackroute.service;

import com.mongodb.*;
import com.mongodb.client.MongoCollection;
import com.stackroute.domain.Questions;
import com.stackroute.exceptions.QuestionAlreadyExistsException;
import com.stackroute.exceptions.QuestionNotPresentException;
import com.stackroute.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mongodb.BasicDBObject;
import com.mongodb.BasicDBObjectBuilder;

import java.util.ArrayList;
import java.util.List;

/*Question Service Implementation class*/
@Service
public class QuestionServiceImpl implements QuestionService {

    private QuestionRepository questionRepository;


    @Autowired
    public QuestionServiceImpl(QuestionRepository questionRepository) {
        this.questionRepository=questionRepository;
    }


    /*save method to save questions*/
    @Override
    public Questions saveQuestion(Questions question) throws QuestionAlreadyExistsException{
        BasicDBObject document = new BasicDBObject();
        document.put("_id", getNextSequence("questionId"));
        question.setQuestionId((int)document.get("_id")+1);

        if(questionRepository.existsById((int)(question.getQuestionId()))) {
            throw new QuestionAlreadyExistsException("This Question already exists");
        }
        //save call of repository
        Questions question1 = questionRepository.save(question);
        return question1;
    }

    /*method for incrementing sequence value*/
    public static Object getNextSequence(String name){
        MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
        DB db = mongoClient.getDB("mashup");
        DBCollection collection = db.getCollection("counters");
        BasicDBObject find = new BasicDBObject();
        BasicDBObject update = new BasicDBObject();
        update.put("$inc", new BasicDBObject("seq", 1));
        DBObject obj =  collection.findAndModify(find, update);
        return obj.get("seq");
    }

    /*method to get question by questionId*/
    @Override
    public Questions getQuestionById(int id) throws QuestionNotPresentException {
        if(questionRepository.findByQuestionId(id)==null){
            throw new QuestionNotPresentException("Question is not present in database");
        }
        Questions getQuestion = questionRepository.getById(id);
        return getQuestion;
    }

    /*method to get questions by tag*/
    @Override
    public List<Questions> getQuestionByTag(String tag) throws QuestionNotPresentException {
        //  System.out.println(tag +"tag in service");
        if(questionRepository.findByTags(tag).size()==0) {
            throw new QuestionNotPresentException("Question of this tag are not present in database");
        }
        List<Questions> questions = questionRepository.getByTag(tag);
        return questions;
    }

}

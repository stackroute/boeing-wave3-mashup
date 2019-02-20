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

/*Question Service Implementation class*/
@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

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
    public Questions getQuestionById() throws QuestionNotPresentException {
        return null;
    }

    /*method to get questions by tag*/
    @Override
    public ArrayList<Questions> getQuestionByTag() throws QuestionNotPresentException {
        return null;
    }

}

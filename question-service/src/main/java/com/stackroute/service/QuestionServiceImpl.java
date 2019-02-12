package com.stackroute.service;

import com.mongodb.*;
import com.stackroute.domain.Questions;
import com.stackroute.exceptions.QuestionAlreadyExistsException;
import com.stackroute.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mongodb.BasicDBObject;
import com.mongodb.BasicDBObjectBuilder;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public Questions saveQuestion(Questions question) throws QuestionAlreadyExistsException{
        System.out.println(question);
        MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
        DB db = mongoClient.getDB("ques1");
        DBCollection collection = db.getCollection("counters");
        BasicDBObject document = new BasicDBObject();
        document.put("_id", getNextSequence("questionId"));
        collection.insert(document);
        question.setQuestionId((int)document.get("_id")+1);
      //  System.out.println("pratima hghjsgfjhdgsfjgdj"+(int)question.getQuestionId());

        if(questionRepository.existsById((int)(question.getQuestionId()))) {
            throw new QuestionAlreadyExistsException("This Question already exists");
        }
        Questions question1 = questionRepository.save(question);
        return question1;
    }

    public static Object getNextSequence(String name){
        MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
        DB db = mongoClient.getDB("ques1");
        db.createCollection("counters", null);
        DBCollection collection = db.getCollection("counters");
        /*Remove first document from collection*/
        BasicDBObject find = new BasicDBObject();
        /*Insert document into collection*/
        BasicDBObjectBuilder documentBuilder = BasicDBObjectBuilder.start()
                    .add("_id", "questionId")
                    .add("seq", 3);
        collection.insert(documentBuilder.get());
      //  find.put("_id", name);
        BasicDBObject update = new BasicDBObject();
        update.put("$inc", new BasicDBObject("seq", 1));
        DBObject obj =  collection.findAndModify(find, update);
        System.out.println();
        return obj.get("seq");
    }
}

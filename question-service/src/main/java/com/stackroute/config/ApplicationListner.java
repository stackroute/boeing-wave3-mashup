package com.stackroute.config;


import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import com.stackroute.domain.Counters;
import com.stackroute.domain.Questions;
import com.stackroute.repository.CounterRepository;
import com.stackroute.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;

/*class to add seed data on start of application*/
@Component
public class ApplicationListner implements ApplicationListener<ApplicationReadyEvent> {

    //    @Autowired
    private QuestionRepository questionRepository;
    private CounterRepository counterRepository;
    private String fileName = "question-service/src/main/resources/csvRepoUpdated.csv";


    @Autowired
    public ApplicationListner(QuestionRepository questionRepository, CounterRepository counterRepository) {
        this.questionRepository = questionRepository;
        this.counterRepository = counterRepository;
    }


    @Override
    public void onApplicationEvent(final ApplicationReadyEvent applicationReadyEvent){
        seedData();
    }

    /*method to push seed data */
    public void seedData()  {
        //    counterRepository.delete(new Counters("questionId",3));
        counterRepository.deleteAll();
        counterRepository.save(new Counters("questionId", 51));
        questionRepository.deleteAll();
//        questionRepository.delete(new Questions(0,"Awesome" ,"Question1","input format","output Format","Beginner","java","url","abc"));
        //      questionRepository.delete(new Questions(1,"Awesome1" ,"Question2","input format","output Format","Intermediate","java","url","def"));
//        questionRepository.save(new Questions(0,"Awesome" ,"Question1","input format","output Format","Beginner","java","url","abc"));
//        questionRepository.save(new Questions(1,"Awesome1" ,"Question2","input format","output Format","Intermediate","java","url","def"));
        File file = new File(fileName);
        try{
            CSVReader csvReader = new CSVReaderBuilder(new FileReader(file)).withSkipLines(1).build();
            String[] record;
            Questions question;
            while ((record = csvReader.readNext()) != null) {
                System.out.println(record);
                question = new Questions();
                question.setQuestionId(Integer.parseInt(record[0]));
                question.setQuestionTitle(record[1]);
                question.setQuestionDescription(record[2]);
                question.setInputFormat(record[3]);
                question.setOutputFormat(record[4]);
                question.setDifficulty(record[5]);
                question.setTags(record[6]);
                question.setGitUrl(record[7]);
                question.setUsername("admin");
                if (!questionRepository.existsById(Integer.parseInt(record[0]))) {
                    questionRepository.save(question);
                }
            }
        }
        catch (Exception e){
            e.printStackTrace();
        }

    }
}

//package com.stackroute.config;
//
//import com.opencsv.CSVReader;
//import com.opencsv.CSVReaderBuilder;
//import com.stackroute.domain.Questions;
//import com.stackroute.repository.QuestionRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//import java.io.File;
//import java.io.FileReader;
//import java.io.IOException;
//
//
//
//@Component
//public class QuestionPosterToDB implements CommandLineRunner {
//    private QuestionRepository questionRepository;
//
//    private String fileName = "/home/boeingwave3-kishlay/Downloads/boeing-wave3-mashup/question-service/src/main/resources/csvRepoUpdated.csv";
//
//    @Autowired
//    public QuestionPosterToDB(QuestionRepository questionRepository)
//    {
//        this.questionRepository = questionRepository;
//    }
//
//    @Override
//    public void run(String... args) throws IOException
//    {
//        File file = new File(fileName);
//        CSVReader csvReader = new CSVReaderBuilder(new FileReader(file)).withSkipLines(1).build();
//        String[] record;
//        Questions question;
//        while ((record = csvReader.readNext()) != null){
//            System.out.println(record);
//            question = new Questions();
////            question.setQuestionId(Integer.parseInt(record[0]));
//            question.setQuestionTitle(record[1]);
//            question.setQuestionDescription(record[2]);
//            question.setInputFormat(record[3]);
//            question.setOutputFormat(record[4]);
//            question.setDifficulty(record[5]);
//            question.setTags(record[6]);
//            question.setGitUrl(record[7]);
//            question.setUsername("admin");
////            if (!questionRepository.existsById(Integer.parseInt(record[0]))) {
//                questionRepository.save(question);
////            }
//
//        }
//    }
//}
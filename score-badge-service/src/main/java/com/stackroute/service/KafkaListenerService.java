package com.stackroute.service;
import org.springframework.stereotype.Service;

/*Service for kafka*/
@Service
public class KafkaListenerService {
    public String consume(String message)
    {
        String newMessage="{\"username\":\"Raj1234\",\"questionId\":2,\"questionTitle\":\"Second One\",\"result\":\"Success\",\"testCasePassed\":10,\"totalTestCases\":10,\"difficulty\":\"medium\",\"solution\":\"This is the solution\",\"score\":0.0}";
        return newMessage;
    }
    public String consume1(String message1)
    {
        String newMessage1 = "{\"username\":\"Raj1234\",\"age\":22}";
        return newMessage1;
    }
}

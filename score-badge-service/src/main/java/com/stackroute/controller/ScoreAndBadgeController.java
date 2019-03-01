package com.stackroute.controller;
import com.stackroute.domain.Score;
import com.stackroute.service.KafkaListenerService;
import com.stackroute.service.ScoreAndBadgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

/*Controller class*/
@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/")
public class ScoreAndBadgeController {

    private ScoreAndBadgeService scoreAndBadgeService;
    private KafkaListenerService kafkaListenerService;

    @Autowired
    public ScoreAndBadgeController(ScoreAndBadgeService scoreAndBadgeService,KafkaListenerService kafkaListenerService) {
        this.scoreAndBadgeService = scoreAndBadgeService;
        this.kafkaListenerService=kafkaListenerService;
    }

    //method to post data
    @PostMapping("saveScore")
    public Mono<ResponseEntity<String>> save(){
        Score score=new Score();
        String registeredUserObj="";
        String registeredUserData = kafkaListenerService.consume(registeredUserObj);
        String[] splittedData = registeredUserData.trim().split(",");
        String[] submitteduserdata = splittedData[0].trim().split(":");
        String registeredUserName = submitteduserdata[1].trim().split("\"")[1];
        score.setUserName(registeredUserName);
        score.setTotalScore(0.0);
        return scoreAndBadgeService.saveTotalScore(score)
                .map(m -> new ResponseEntity<String>("Successfully saved", HttpStatus.OK))
                .defaultIfEmpty(new ResponseEntity<String>(HttpStatus.NOT_FOUND));
    }

    //method to update data
    @PutMapping("updateScore")
    public Mono<ResponseEntity<String>> updateTotalScore(){
        Score score=new Score();
        String SubmittedObj = "";
        String submittedData = kafkaListenerService.consume(SubmittedObj);
        String[] submitValues = submittedData.trim().split(",");
        String[] submittedusername = submitValues[0].trim().split(":");
        String[] scoreVal = submitValues[8].trim().split(":");
        String userName =submittedusername[1].trim().split("\"")[1];
        score.setUserName(userName);
        double scoreOfQuestion=Double.parseDouble(scoreVal[1].trim().split("}")[0]);
        //method to store username and calculate total score
        return scoreAndBadgeService.calcAndUpdateTotalScore(score,scoreOfQuestion)
                .map(m -> new ResponseEntity<String>("Successfully updated", HttpStatus.OK))
                .defaultIfEmpty(new ResponseEntity<String>(HttpStatus.NOT_FOUND));
    }

    //method to get User Data
    @GetMapping("getTotalScore/{userName}")
    public Mono<ResponseEntity<Score>> getScore(@PathVariable(value = "userName") final String userName){
        return scoreAndBadgeService.getTotalScore(userName)
                .map(m -> new ResponseEntity<Score>(m, HttpStatus.OK))
                .defaultIfEmpty(new ResponseEntity<Score>(HttpStatus.NOT_FOUND));
    }

}

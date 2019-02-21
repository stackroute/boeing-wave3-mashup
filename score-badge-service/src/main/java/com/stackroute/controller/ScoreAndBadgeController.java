package com.stackroute.controller;
import com.stackroute.domain.Score;
import com.stackroute.domain.SubmissionData;
import com.stackroute.service.ScoreAndBadgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


//Main controller
/*Controller class*/
@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/")
public class ScoreAndBadgeController {

    private ScoreAndBadgeService scoreAndBadgeService;

    @Autowired
    public ScoreAndBadgeController(ScoreAndBadgeService scoreAndBadgeService) {
        this.scoreAndBadgeService = scoreAndBadgeService;
    }

    @PostMapping("totalScore")
    public ResponseEntity<?> saveTotalScore(){

        SubmissionData submissionData=new SubmissionData();

        Score score = scoreAndBadgeService.calcTotalScore(submissionData);

        return new ResponseEntity<Score>(score, HttpStatus.OK);
    }


}

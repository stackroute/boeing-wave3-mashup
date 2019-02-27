package com.stackroute.service;

import com.stackroute.domain.SubmissionData;
import com.stackroute.repository.SubmissionRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.kafka.core.KafkaTemplate;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class SubmissionServiceTest {

    @Mock
    private SubmissionRepository submissionRepository;

    @Mock
    private KafkaTemplate<String, SubmissionData> kafkaTemplate;

    @InjectMocks
    private SubmissionServiceImpl submissionService;

    private SubmissionData submissionData;

    @Before
    public void setUp() throws Exception {
        submissionData = new SubmissionData();
        submissionData.setUsername("Admin");
        submissionData.setQuestionId(1);
        submissionData.setQuestionTitle("First Question");
        submissionData.setResult("Success");
        submissionData.setDifficulty("easy");
        submissionData.setTestCasePassed(10);
        submissionData.setTotalTestCases(10);
        submissionData.setSolution("No Solution available");
    }

    @Test
    public void saveSubmission() throws Exception {
        when(submissionRepository.save(submissionData)).thenReturn(submissionData);
        SubmissionData actual = submissionService.saveSubmission(submissionData);
        assertEquals(submissionData, actual);
        verify(submissionRepository, times(1)).save(submissionData);
    }

    @Test
    public void getSubmission() throws Exception{
        when(submissionRepository.save(submissionData)).thenReturn(submissionData);
        submissionService.saveSubmission(submissionData);
        when(submissionRepository.getSubmissionDataByUsernameAndQuestionId("Admin", 1)).thenReturn(submissionData);
        SubmissionData actual = submissionService.getSubmission("Admin",1);
        assertEquals(submissionData.toString(), actual.toString());
    }
}

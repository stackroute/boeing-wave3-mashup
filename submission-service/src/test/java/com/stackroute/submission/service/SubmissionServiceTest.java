package com.stackroute.submission.service;

import com.stackroute.submission.domain.SubmissionData;
import com.stackroute.submission.repository.SubmissionRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class SubmissionServiceTest {

    @Mock
    private SubmissionRepository submissionRepository;

    @InjectMocks
    private SubmissionServiceImpl submissionService;

    private SubmissionData submissionData;

    @Before
    public void setUp() throws Exception {
        submissionData = new SubmissionData();
        submissionData.setUsername("Kishlay");
        submissionData.setQuestionId(1);
        submissionData.setQuestionTitle("First Question");
        submissionData.setResult("Success");
        submissionData.setTestCaseResult("Passed all test cases");
        submissionData.setSolution("No Solution available");
        System.out.println("Submission data :" + submissionData + " " + submissionData.getUsername());
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
//        when(submissionRepository.existsById("Kishlay")).thenReturn(true);
        when(submissionRepository.getSubmissionDataByUsernameAndQuestionId("Kishlay", 1)).thenReturn(submissionData);
        SubmissionData actual = submissionService.getSubmission("Kishlay",1);
        System.out.println(actual);
        assertEquals(submissionData.toString(), actual.toString());
    }
}

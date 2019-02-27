package com.stackroute.service;

import com.stackroute.domain.Question;
import org.apache.catalina.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;

import java.util.List;

import static org.junit.Assert.*;
import com.stackroute.domain.Question;
import org.apache.catalina.User;
import org.junit.Test;
import org.mockito.InjectMocks;
import com.stackroute.domain.Question;
import java.util.List;

import static org.junit.Assert.*;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.mockito.internal.verification.VerificationModeFactory.times;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RunWith(MockitoJUnitRunner.class)
public class FetchTemplateServiceImplTest {

    @InjectMocks
    private FetchTemplateServiceImpl fetchTemplateService;

    @Mock
    private Question question;
    private User user;

    @Before
    public void setUp() throws Exception {

        MockitoAnnotations.initMocks(this);
        question=new Question();
        question.setQuestionId(1);
        question.setQuestionTitle("arraylist");
        question.setQuestionDescription("sort the arraylist");
        question.setTags("java");
        question.setInputFormat("input");
        question.setOutputFormat("output");
        question.setGitUrl("https://github.com/aroranamita09/ArrayListOperation.git");
        ArrayList<Object> list = new ArrayList<>();
        list.add(question);

    }
    @After
    public void tearDown() throws Exception {
    }
    @Test
    public void setGitURL() {

    }

    @Test
    public void getGitUrl() {
    }

    @Test
    public void fetchFilesAndSave() {
    }
}









//
//    @Test
//    public void getAllMusicTestSuccess() {
//        musicRepository.save(music);
//        when(musicRepository.findAll()).thenReturn(list);
//        List<Music> musicList=musicService.getAllMusic();
//        Assert.assertEquals(list,musicList);
//
//    }
//
//    @Test
//    public void updateMusicTestSuccess()throws TrackNotFoundException {
//
//        when(musicRepository.existsById(anyInt())).thenReturn(true);
//        when(musicRepository.findById(anyInt())).thenReturn(Optional.of(music));
//        when(musicRepository.save((Music)any())).thenReturn(music);
//        Music updatedMusic=musicService.updateMusic(anyString(),101);
//        Assert.assertEquals(music,updatedMusic);
//
//
//
//    }
//
//    @Test
//    public void deleteMusicTestSuccess() throws TrackNotFoundException{
//        when(musicRepository.existsById(anyInt())).thenReturn(true);
//        when(musicRepository.findAll()).thenReturn(list);
//
//        List<Music> deleteMusic=musicService.deleteMusic(1);
//
//        Assert.assertEquals(list,deleteMusic);
//        verify(musicRepository, Mockito.times(1)).deleteById(1);
//
//    }
//
//    @Test
//    public void findByIdTestSuccess()throws TrackNotFoundException {
//        when(musicRepository.existsById(anyInt())).thenReturn(true);
//        when(musicRepository.findById(anyInt())).thenReturn(Optional.of(music));
//        Optional<Music> music1=musicService.findById(101);
//        Assert.assertEquals(music1,Optional.of(music));
//    }
//
//    @Test
//    public void findByNameTestSuccess()
//    {
//        when(musicRepository.findByTrackName(anyString())).thenReturn(list);
//        List<Music> music1=musicService.findByTrackName(anyString());
//        Assert.assertEquals(music1,list);
//    }
//
//}
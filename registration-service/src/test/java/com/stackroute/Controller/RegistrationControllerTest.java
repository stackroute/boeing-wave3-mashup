package com.stackroute.Controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.config.KafkaConfiguration;
import com.stackroute.controller.UserController;
import com.stackroute.domain.User;
import com.stackroute.exception.UserAlreadyExistsException;
import com.stackroute.exception.UserNotFoundException;
import com.stackroute.service.UserService;
import org.hamcrest.Matcher;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.stubbing.OngoingStubbing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.util.concurrent.ListenableFuture;

import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.core.Is.is;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import static org.hamcrest.Matchers.hasSize;

import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.mockito.Mockito.*;
import static org.mockito.internal.verification.VerificationModeFactory.times;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

public class RegistrationControllerTest {

    @InjectMocks
    private UserController userController;

    @Mock
    private UserService service;

    @Mock
    private KafkaConfiguration configuration;

    //@Mock
    private KafkaTemplate<String, User> template;


//    username2=mahesh
//            password2=mahe123
//    age2=22
//    gender2=male
//            currentCompany2=Boeing
//    course2=CSE
//            firstName2=mahi
//    lastName2=eswar
//            discipline2=BE
//    emailId2=example@gmail.com
//            collegeName2=BIT

//    private String username;
//    private String password;
//    private int age;
//    private String gender;
//    private String company;
//    private String course;
//    private String firstName;
//    private String lastName;
//    private String interest;
//    private String discipline;
//    @Id
//    private String id;
//    private String emailId;
//    private String college;

    User user;
    List<User> userList;
    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
//        template = Mockito.mock(KafkaTemplate.class);
//        Mockito.when(configuration.getKafkaTemplateObject()).thenReturn(template);
        //KafkaTemplate<String, User> template = Mockito.mock(KafkaTemplate.class);
        //ject mock = when(template.send(Mockito.any(), Mockito.any())).getMock();

        user = new User();
        user.setUsername("mahe12");
        user.setPassword("blowin in the wind");
        user.setGender("Nice song");
        user.setLastName("mahe12");
        user.setFirstName("blowin in the wind");
        user.setEmailId("Nice song");
        user.setCourse("mahe12");
        user.setDiscipline("blowin in the wind");
        user.setCollege("Nice song");
        user.setAge(25);
        user.setInterest("blowin in the wind");
        user.setCompany("Nice song");

        userList = new ArrayList<User>();
        userList.add(user);

    }

//    @Test
//    public void saveUser() throws UserAlreadyExistsException {
//        User user1 = Mockito.mock(User.class);
//        //OngoingStubbing<ListenableFuture<SendResult<String, User>>> mockFuture = Mockito.mock(OngoingStubbing<ListenableFuture<SendResult<K, V>>);
////        Mockito.when(template.send("AuthMessage", user1)).thenReturn(Mockito.any());
//        Mockito.when(service.saveUser(user)).thenReturn(user1);
//        ResponseEntity result = userController.saveUser(this.user);
//        verify(service).saveUser(Mockito.any());
//        Assert.assertEquals(HttpStatus.CREATED,result.getStatusCode());
//    }

   /* public static String asJsonString(final Object object) {
        try {
            return new ObjectMapper().writeValueAsString(object);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }


    }*/

    @Test
    public void listallUsers_success(){
        Mockito.when(service.getAllUsers()).thenReturn(userList);
        ResponseEntity result = userController.listOfUsers();
        verify(service).getAllUsers();
        Assert.assertEquals(HttpStatus.OK,result.getStatusCode());
    }

    @Test
    public void deleteUser_sucess() throws UserNotFoundException {
        Mockito.when(service.deleteUser("User")).thenReturn(user);
        ResponseEntity result = userController.deleteUser("User");
        verify(service).deleteUser("User");
        Assert.assertEquals(HttpStatus.GONE,result.getStatusCode());
    }

    @Test
    public void UpdateUser_success() throws UserNotFoundException {
        Mockito.when(service.updateUser("User",user)).thenReturn(user);
        ResponseEntity result = userController.updateUser("User",user);
        verify(service).updateUser("User",user);
        Assert.assertEquals(HttpStatus.OK,result.getStatusCode());
    }

    /*@Test
    public void post_success(){
        User user1 = Mockito.mock(User.class);
        Mockito.when(template.send("AuthMessage", user1)).thenReturn(Mockito.any());
        Mockito.when(service.getUserByEmailid("User")).thenReturn(user1);
        String result = userController.post("User");
        verify(service).getUserByEmailid("User");
        Assert.assertEquals("Published Successfully", result);
    }*/


//    @Test
//    public void test_get_all_success() throws Exception {
//        List<User> muzixs = Arrays.asList(
//                new User("mahe12","blowin in the wind",25,"Nice song","Nice song","mahe12","nice"),
//                new User(2, "californication","wow"));
//        when(userService.getAllUsers()).thenReturn(muzixs);
//        mockMvc.perform(get("/api/v2/tracks"))
//                .andExpect(status().isOk())
//                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
//                .andExpect(jsonPath("$[0].id", is(1)))
//                .andExpect(jsonPath("$[0].name", is("dont let me down")))
//                .andExpect(jsonPath("$[0].comments", is("nice")))
//                .andExpect(jsonPath("$[1].id", is(2)))
//                .andExpect(jsonPath("$[1].name", is("californication")))
//                .andExpect(jsonPath("$[1].comments", is("wow")));
//        verify(userService, times(1)).getAllUsers();
//        verifyNoMoreInteractions(userService);
//    }

    /*@Test
    public void test_delete_user_success() throws Exception {
        User user = new User();
        user.setUsername("mahe12");
        user.setPassword("blowin in the wind");
        user.setGender("Nice song");
        user.setLastName("mahe12");
        user.setFirstName("blowin in the wind");
        user.setEmailId("Nice song");
        user.setCourse("mahe12");
        user.setDiscipline("blowin in the wind");
        user.setCollege("Nice song");
        user.setAge(25);
        user.setInterest("blowin in the wind");
        user.setCompany("Nice song");

        doNothing().when(userService).deleteUser(user.getEmailId());

        mockMvc.perform(
                delete("/api/v1/users/{id}", user.getEmailId()))
                .andExpect(status().isOk());


        verify(userService, times(1)).deleteUser(user.getEmailId());
        verifyNoMoreInteractions(userService);
    }
*/
}

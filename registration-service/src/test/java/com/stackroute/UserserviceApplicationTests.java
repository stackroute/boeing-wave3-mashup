package com.stackroute;

import com.stackroute.domain.User;
import com.stackroute.exception.UserAlreadyExistsException;
import com.stackroute.repository.UserRepository;
import com.stackroute.service.UserServiceImpl;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


public class UserserviceApplicationTests {

	@InjectMocks
	private UserServiceImpl service;

	@Mock
	private UserRepository repos;

	@Mock
	private PasswordEncoder encoder;


	User user;
	List<User> userList;
	@Before
	public void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);


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

//	@Test
//	public void saveuser_success() throws UserAlreadyExistsException {
//		Mockito.when(repos.existsByEmailId(user.getEmailId())).thenReturn(false);
//		//Mockito.when(encoder.encode("blowin in the wind")).thenReturn("AXY");
//		Mockito.when(repos.save(user)).thenReturn(user);
//		User result = service.saveUser(user);
//		Mockito.verify(repos).existsByEmailId(user.getEmailId());
//		Mockito.verify(repos).save(user);
//		//Mockito.verify(encoder).encode("blowin in the wind");
//		Assert.assertEquals(user.getAge(),result.getAge());
//	}

	@Test
	public void getAllUsers_success(){
		Mockito.when(repos.findAll()).thenReturn(userList);
		List<User> result = service.getAllUsers();
		Mockito.verify(repos).findAll();
		Assert.assertEquals(1,result.size());
	}

//	@Test
//	public void deleteUser_success(){
//		Mockito.when(repos.findAllById("User")).thenReturn(Optional.of(user));
//
//	}

}


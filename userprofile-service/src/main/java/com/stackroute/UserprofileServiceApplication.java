package com.stackroute;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

// main class for running the application
@EnableEurekaClient
@SpringBootApplication
public class UserprofileServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserprofileServiceApplication.class, args);
	}

}


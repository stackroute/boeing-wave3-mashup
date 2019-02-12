package com.stackroute.recommend;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


@EnableEurekaClient
@SpringBootApplication
public class RecommendApplication {

	public static void main(String[] args) {
		SpringApplication.run(RecommendApplication.class, args);
	}

}


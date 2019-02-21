package com.stackroute;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
<<<<<<< HEAD
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.cloud.context.config.annotation.RefreshScope;
=======
>>>>>>> be4fb5dbe67d8faf4d135bb1f6d6bcc49320df9b
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@RefreshScope
@SpringBootApplication
public class ExecutionEngineApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExecutionEngineApplication.class, args);
	}

}


package com.stackroute.voting.config;

import com.stackroute.voting.domain.Vote;
import com.stackroute.voting.repository.VoteRepository;
import com.stackroute.voting.repository.VoteRepositoryImpl;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories(basePackageClasses = VoteRepository.class)
@Configuration
public class MongoDBConfig {

    @Bean
    CommandLineRunner commandLineRunner(VoteRepository voteRepository){
        return args -> {
            voteRepository.save(new Vote("ishu",5,"UP"));
            voteRepository.save(new Vote("sid",5,"UP"));
            voteRepository.save(new Vote("sid",2,"UP"));
            voteRepository.save(new Vote("sid",7,"DOWN"));
        };
    }
}

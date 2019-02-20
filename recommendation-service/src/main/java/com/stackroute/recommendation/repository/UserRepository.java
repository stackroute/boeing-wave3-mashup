package com.stackroute.recommendation.repository;

import com.stackroute.recommendation.model.Question;
import com.stackroute.recommendation.model.User;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends Neo4jRepository<User, Long> {

    // Get all functions

    @Query("MATCH (u:User) RETURN u")
    List<User> getAllUsers();

    @Query("MATCH (n:Question) RETURN n")
    List<Question> getAllQuestions();


    //Save functions

    @Query("CREATE(user:User{id:{id},emailId:{emailId},interests:{interests}})")
    User saveUser(@Param("id") Long id, @Param("emailId") String emailId ,@Param("interests") String interests);

    @Query("CREATE(question:Question{questionId:{questionId},questionTitle:{questionTitle},difficulty:{difficulty},tags:{tags}})")
    Question saveQuestion(@Param("questionId") String questionId,@Param("questionTitle") String questionTitle,@Param("difficulty") String difficulty,@Param("tags") String tags);



    //Update functions

    @Query("MATCH (n:User{emailId:{emailId}}) SET n.name={name} SET n.interests={interests}")
    User updateUserNode(@Param("emailId") String emailId,@Param("name") String name,@Param("interests") String interests);

    @Query("MATCH (q:Question{questionId:{questionId}}) SET q.questionTitle={questionTitle} SET q.difficulty={difficulty} SET q.tags={tags}")
    Question updateQuestionNode(@Param("questionId") String questionId,@Param("questionTitle") String questionTitle,@Param("difficulty") String difficulty,@Param("tags") String tags);


    //Delete functions

    @Query("MATCH (n:User{emailId:{emailId}}) DELETE n")
    User deleteUser(@Param("emailId") String emailId);

    @Query("MATCH (q:Question{questionId:{questionId}}) DELETE q")
    Question deleteQuestion(@Param("questionId") String questionId);

    //Relationship add
    @Query("MATCH (user:User{emailId:{emailId}}), (question:Question{questionId:{questionId}}) CREATE (user)-[:ATTEMPTED]->(question)")
    void addNewRelationship(@Param("emailId") String emailId, @Param("questionId") String questionId);

    @Query("MATCH (o:Question) WHERE o.tags = {interests} RETURN o")
    List<Question> recommendOnInterest(@Param("interests") String interests);

    @Query("MATCH (q:Question)<-[:ATTEMPTED]-(u:User{emailId:{emailId}}) MATCH (a:Question{tags:q.tags})<-[:subconcept_of]-(l:Level) RETURN a")
    List<Question> recommendOnAttempts(@Param("emailId") String emailId);
}

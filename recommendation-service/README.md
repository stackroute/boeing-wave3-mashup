# Recommendation Service - Spring Boot with SpringData Neo4J
Recommends questions to user based on various rules.

## Version used
- Spring Boot - 1.5.14.RELEASE
- Neo4J Bolt Driver - 2.1.1

## REST endpoint
- `/rest/neo4j/users` - returns all users nodes
- `/rest/neo4j/questions` - returns all questions nodes
- `/rest/neo4j/user` - creates user node
- `/rest/neo4j/question` - creates question node
- `/rest/neo4j/userupdate` - update user node
- `/rest/neo4j/questionupdate` - update question node
- `/rest/neo4j/userdelete` - delete user node
- `/rest/neo4j/questiondelete` - delete question node
- `/rest/neo4j/relationship/{emailId}/{questionId}` - adds relationship between user and question
- `/rest/neo4j/attempted` - returns recommendation based on attempted questions
- `/rest/neo4j/interest` - returns recommendation based on user interest

## Neo4J 
- Docker command to bring up Neo4J server
```
docker run --publish=7474:7474 --publish=7687:7687 neo4j:3.0
```
- Neo4J Browser URL
```
http://localhost:7474/browser
```

## Cypher Queries for Neo4J
- Creation of Question and User nodes:

```
CREATE(user:User{id:{id},emailId:{emailId},interests:{interests}})
CREATE(question:Question{questionId:{questionId},questionTitle:{questionTitle},difficulty:{difficulty},tags:{tags}})

```

- Updating nodes

```
MATCH (n:User{emailId:{emailId}}) SET n.name={name} SET n.interests={interests}
MATCH (q:Question{questionId:{questionId}}) SET q.questionTitle={questionTitle} SET q.difficulty={difficulty} SET q.tags={tags}
;
```
- deleting nodes

```
MATCH (n:User{emailId:{emailId}}) DELETE n
MATCH (q:Question{questionId:{questionId}}) DELETE q

```



- Adding new relationship

```
MATCH (user:User{emailId:{emailId}}), (question:Question{questionId:{questionId}}) CREATE (user)-[:ATTEMPTED]->(question)
;
```
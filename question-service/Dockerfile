FROM openjdk:10

ADD ./target/question-service-0.0.1-SNAPSHOT.jar question-service.jar
EXPOSE 8022

ENTRYPOINT ["java","-jar","question-service.jar"]

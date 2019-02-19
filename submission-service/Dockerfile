FROM openjdk:10

ADD ./target/submission-service-0.0.1-SNAPSHOT.jar submission-service.jar
EXPOSE 8026

ENTRYPOINT ["java","-jar","submission-service.jar"]

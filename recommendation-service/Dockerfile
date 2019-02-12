FROM openjdk:10

ADD ./target/recommend-0.0.1-SNAPSHOT.jar recommendation-service.jar
EXPOSE 8023

ENTRYPOINT ["java","-jar","recommendation-service.jar"]

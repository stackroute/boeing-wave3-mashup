FROM openjdk:11

ADD ./target/voting-service-0.0.1-SNAPSHOT.jar voting-service.jar
EXPOSE 8097

ENTRYPOINT ["java","-jar","voting-service.jar"]

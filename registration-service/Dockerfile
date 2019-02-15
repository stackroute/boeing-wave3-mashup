FROM openjdk:10

ADD ./target/registration-service-0.0.1-SNAPSHOT.jar registration-service.jar
EXPOSE 8020

ENTRYPOINT ["java","-jar","registration-service.jar"]

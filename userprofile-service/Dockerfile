FROM openjdk:10

ADD ./target/userprofile-service-0.0.1-SNAPSHOT.jar userprofile-service.jar
EXPOSE 8024

ENTRYPOINT ["java","-jar","userprofile-service.jar"]

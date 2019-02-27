FROM openjdk:10

ADD ./target/authentication-service-1.0.2-SNAPSHOT.jar authentication-service.jar
EXPOSE 8021

ENTRYPOINT ["java","-jar","authentication-service.jar"]

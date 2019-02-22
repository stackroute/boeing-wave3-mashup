FROM openjdk:10

ADD ./target/recommendation-service-2.1.2.RELEASE.jar registration-service.jar
EXPOSE 8023

ENTRYPOINT ["java","-jar","registration-service.jar"]

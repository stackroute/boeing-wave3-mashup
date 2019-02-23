FROM openjdk:11

ADD ./target/score-badge-service-0.0.1-SNAPSHOT.jar score-badge-service.jar
EXPOSE 8033

ENTRYPOINT ["java","-jar","score-badge-service.jar"]

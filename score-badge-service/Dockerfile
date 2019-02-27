FROM openjdk:10

ADD ./target/score-badge-service-1.0.2-SNAPSHOT.jar score-badge-service.jar
EXPOSE 8033

ENTRYPOINT ["java","-jar","score-badge-service.jar"]

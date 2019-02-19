FROM openjdk:10

ADD ./target/execution-engine-0.0.1-SNAPSHOT.jar execution-engine.jar
EXPOSE 8025

ENTRYPOINT ["java","-jar","execution-engine.jar"]

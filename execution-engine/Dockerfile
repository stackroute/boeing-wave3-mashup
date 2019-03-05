FROM openjdk:10

ADD ./target/execution-engine-1.0.3-SNAPSHOT.jar execution-engine.jar
EXPOSE 8025

ENTRYPOINT ["java","-jar","execution-engine.jar"]

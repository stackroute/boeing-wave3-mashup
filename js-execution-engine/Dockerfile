FROM openjdk:10

ADD ./target/js-execution-engine-1.0.3-SNAPSHOT.jar js-execution-engine.jar
EXPOSE 8031

ENTRYPOINT ["java","-jar","js-execution-engine.jar"]

FROM openjdk:10

ADD ./target/nextevent-1.0.2-SNAPSHOT.jar /event/src/nextevent-1.0.2-SNAPSHOT.jar
EXPOSE 8082
WORKDIR event/src
ENTRYPOINT ["java","-jar","nextevent-1.0.2-SNAPSHOT.jar"]

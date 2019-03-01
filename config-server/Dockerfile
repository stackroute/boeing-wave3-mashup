FROM openjdk:10

ADD ./target/config-server-1.0.2-SNAPSHOT.jar event/src/config-server.jar
EXPOSE 8888
WORKDIR event/src
ENTRYPOINT ["java","-jar","config-server.jar"]

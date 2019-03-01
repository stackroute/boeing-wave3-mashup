FROM openjdk:10

ADD ./target/zuul-gatewayservice-1.0.2-SNAPSHOT.jar /event/src/zuul-gatewayservice.jar
EXPOSE 8092
WORKDIR event/src
ENTRYPOINT ["java","-jar","zuul-gatewayservice.jar"]

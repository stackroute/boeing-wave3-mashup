FROM openjdk:10

ADD ./target/search-service-0.0.1-SNAPSHOT.jar search-service.jar
EXPOSE 8097

ENTRYPOINT ["java","-jar","search-service.jar"]

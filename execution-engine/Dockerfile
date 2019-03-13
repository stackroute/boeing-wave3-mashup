FROM openjdk:10
FROM maven:3.6.0-jdk-10

FROM node:carbon
RUN npm install -g nodemon
WORKDIR /usr/src/app
#COPY /DB/package/package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
CMD [ "nodemon" ]


ADD ./target/execution-engine-1.0.3-SNAPSHOT.jar /usr/src/app/execution-engine.jar
EXPOSE 8025

ENTRYPOINT ["java","-jar","execution-engine.jar"]

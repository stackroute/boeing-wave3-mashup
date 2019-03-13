FROM openjdk:10
FROM maven:3.6.0-jdk-10

FROM node:carbon
RUN npm install -g nodemon
WORKDIR /usr/src/app
COPY /home/ubuntu/.npm/nodemon/1.18.10/package/package.json /usr/src/app/
RUN npm install && mv /usr/src/app/node_modules /DB/node_modules
COPY . /usr/src/app
CMD [ "nodemon" ]


ADD ./target/execution-engine-1.0.3-SNAPSHOT.jar /usr/src/app/execution-engine.jar
EXPOSE 8025

ENTRYPOINT ["java","-jar","execution-engine.jar"]

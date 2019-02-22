FROM node:carbon

WORKDIR /xyz

COPY . .

RUN npm install

RUN npm install http-server -g

RUN npm run build

WORKDIR /xyz/dist/AngularJwtAuth

CMD ["http-server", "-c1" , "-p", "8029"]
#FROM node:8.11.2-alpine as node
#
#RUN npm install
#COPY . .
## RUN npm run build
#
## Stage 2
#FROM node
#RUN npm install http-server -g
#CMD ["http-server","-p","4200", "dist/AngularJwtAuth"]

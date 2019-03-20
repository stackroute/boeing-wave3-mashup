#FROM node:carbon
#
#COPY ./dist  ng
#COPY ./package-production.json ng/package-production
#
#RUN npm install
#
#RUN npm install http-server -g
#
#WORKDIR /ng/dist
#
#CMD ["http-server", "-c1" , "-p", "8030"]
# FROM node:8.11.2-alpine as node

# RUN npm install
# COPY . .
# RUN npm run build

# Stage 2
# FROM node
# RUN npm install http-server -g
# CMD ["http-server","-p","8030", "dist/AngularJwtAuth"]



# Stage 1
FROM node:8.11.2-alpine as node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install ngx-file-drop
RUN npm install angular-bootstrap-md --save
RUN npm install rxjs-compat
RUN npm install api-ai-javascript
RUN npm install stompjs
RUN npm install sockjs
RUN npm install jquery
RUN npm install browser-sync --save-dev
RUN npm i net -S
COPY . .
RUN npm run build
# Stage 2
FROM node
RUN npm install http-server -g
CMD ["http-server","-p","8030", "dist/AngularJwtAuth","-S","--cert","/DB/ssl/cert.pem","--key","/DB/ssl/key.pem"]

FROM node:8.11.2-alpine as node
#COPY package*.json ./
COPY . .
RUN npm install

# RUN npm run build

# Stage 2
FROM node
RUN npm install http-server -g
CMD ["http-server","-p","8010", "dist/AngularJwtAuth"]

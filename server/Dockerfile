FROM node:12.20.1-stretch-slim
RUN mkdir /app
WORKDIR /app

COPY ./package.json /app

RUN npm install

COPY . /app

CMD [ "npm", "run", "start" ]
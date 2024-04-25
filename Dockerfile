FROM node:latest

WORKDIR /react-docker-example/

COPY public/ /react-docker-example/public
COPY src/ /react-docker-example/src
COPY package.json /react-docker-example/
COPY tailwind.config.js /react-docker-example/

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
FROM node:12.18.3

WORKDIR /usr/src/app/node-server

COPY package*.json ./

RUN npm install

EXPOSE 3080

CMD ["npm", "run", "dev"]
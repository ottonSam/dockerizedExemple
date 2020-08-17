FROM node:12.18.3

WORKDIR /usr/src/app/react-ui

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
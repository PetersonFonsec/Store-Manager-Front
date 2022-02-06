FROM node:16

WORKDIR /app

COPY package*.json ./

COPY . .

EXPOSE 4200

CMD npm install && npm run start

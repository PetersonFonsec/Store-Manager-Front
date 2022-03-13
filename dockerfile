FROM node:16

WORKDIR /app

COPY . .

EXPOSE 4200

CMD npm install && npm run start

FROM node:20

WORKDIR /app

COPY . .

EXPOSE 4200

CMD npm install && npm run start

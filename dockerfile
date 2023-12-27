FROM node:20

WORKDIR /app

COPY . .

EXPOSE 4200

CMD npm install --legacy-peer-deps && npm run start

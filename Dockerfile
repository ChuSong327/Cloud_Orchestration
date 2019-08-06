FROM node:8.10.0-alpine

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build

EXPOSE 3001

CMD ["node", "server/server.js", "production"]
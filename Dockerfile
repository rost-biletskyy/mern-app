FROM node

WORKDIR /app

COPY backend/package*.json .

RUN npm install

COPY backend/. .

EXPOSE 5000

CMD npm run dev
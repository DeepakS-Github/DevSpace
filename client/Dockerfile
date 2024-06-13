FROM node:18-alpine

WORKDIR /app

ENV VITE_BACKEND_URL="http://localhost:8080"

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
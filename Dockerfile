FROM node:lts
COPY package.json package.json
RUN npm install package.json
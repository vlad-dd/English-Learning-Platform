FROM node
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/bff
WORKDIR /usr/src/app/bff
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "yarn", "server"]
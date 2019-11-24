FROM node:8.12.0

# Create working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN ls -al

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]
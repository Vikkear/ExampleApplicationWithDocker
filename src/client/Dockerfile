# base image
FROM node:8.12.0

# set working directory
WORKDIR /usr/app/react

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/app/react/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json ./
RUN npm install 

COPY . .

EXPOSE 3000


# start app
CMD ["npm", "start"]
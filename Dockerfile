FROM node:12.13.1
WORKDIR /code
COPY package.json /code/
RUN apt-get install libpng-dev && npm install -g node-gyp

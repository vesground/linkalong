FROM node:13.7-alpine as build

RUN apk add --update python make g++\
   && rm -rf /var/cache/apk/*

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn cache clean && yarn --update-checksums
COPY . ./
RUN yarn && yarn build


EXPOSE 3000
CMD ["yarn", "start"]

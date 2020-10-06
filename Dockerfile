FROM node:lts

RUN mkdir -p /container/app && chown -R node:node /container/app

WORKDIR /container/app

COPY package*.json ./

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD [ "npm", "start" ]
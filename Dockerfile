# Mutlistage docker file

# Base 
FROM node:12-alpine as base
ENV NODE_ENV=production
EXPOSE 3000
RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app
WORKDIR /usr/src/app
USER node
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci && npm cache clean --force

# Development 
FROM base as dev
ENV NODE_ENV=development
ENV PATH=/usr/src/app/node_modules/.bin:$PATH
RUN npm install --only=development
COPY . .

# Deploy
FROM base as deploy
COPY --chown=node:node . .
CMD [ "node", "./bin/www" ]

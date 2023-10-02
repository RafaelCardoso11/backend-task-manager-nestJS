FROM node:18.16.1

WORKDIR /usr/src/api

COPY . .

RUN yarn install --quiet --non-interactive --no-optional --no-progress --frozen-lockfile --loglevel error

RUN yarn build

CMD ["yarn", "start:prod"]
<div align="center">
  <h1>bot-house</h1>
</div>

<div align="center">
  <strong>🤖manage pseudo bots🤖</strong>
</div>

Run the code written in JS as a bot. Also, we don't need to deploy that bot or set it up with Slack.

![](./docs/images/demo.gif)

## Environment
If want to run locally, need to use below.
- Node9.0 ~
- postgresql

or use docker-compose.

## Slack App Setup
See [Slack App Setup](./docs/slack/slack-app-setup.md).

## .env
Copy `.env.sample` to `.env` and modify.  
See [environment variables of slack](./docs/slack/slack-app-setup.md#bot-house).


## Production & Deploy
Recommend to use docker-compose.

```sh
# Please edit the value of .env before doing.

# without docker-compose
$ git clone https://github.com/abouthiroppy/bot-house
$ cd bot-house
$ npm i
$ npm run sequelize -- db:create
$ npm run db:migrate
$ npm run start:prod
$ npm run build

# use docker-compose and deploy to Heroku
$ git clone https://github.com/abouthiroppy/bot-house
$ cd bot-house
$ npm i
$ heroku container:push web --app bot-house
# go to Heroku's page and use "Run console" from "more" tab.
# https://dashboard.heroku.com/apps/xxxx?web-console=bot-house
# see https://devcenter.heroku.com/articles/local-development-with-docker-compose
>  npm run db:create
```
## Development
```sh
$ brew services start postgres # if it is Mac
$ git clone https://github.com/abouthiroppy/bot-house
$ cd bot-house
$ npm i
$ mv .env.sample .env # please edit!
$ npm run sequelize -- db:create
$ npm run db:migrate
$ npm start # client and server
$ npm run server # only server
$ npm run client # only client

# with docker-compose
$ git clone https://github.com/abouthiroppy/bot-house
$ cd bot-house
$ npm i
$ mv .env.sample .env # please edit!
$ docker-compose build
$ docker-compose run app npm run sequelize -- db:create
$ npm run sequelize — db:create # if you can not run ↑
$ docker-compose run app npm run db:migrate
$ npm run db:migrate  # if you can not run ↑
$ docker-compose up
```
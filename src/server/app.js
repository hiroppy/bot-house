'use strict';

require('dotenv').config();

if (!process.env.SITE_URI || !process.env.SLACK_BOT_TOKEN ||
  !process.env.SLACK_CLIENT_ID || !process.env.SLACK_TEAM_NAME) {
  console.log('please set environment variable');
  process.exit(1);
}

const path    = require('path');
const express = require('express');
const morgan  = require('morgan');

const app = express();

// boot bot
require('./bot');

// for development
if (process.env.NODE_ENV === 'development' && process.env.MODE === 'standalone') {
  const webpack = require('webpack');

  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const config               = require('../../webpack.config');
  const compiler             = webpack(config);

  const w = webpackDevMiddleware(compiler, {
    hot  : true,
    stats: {
      colors: true
    },
    lazy            : false,
    noInfo          : true,
    serverSideRender: false,
    publicPath      : config.output.publicPath
  });

  app.use(w);
  app.use(webpackHotMiddleware(compiler));
}

// static
app.use(express.static(path.join(process.cwd(), 'dist')));

app.use(require('cookie-parser')());
app.use(require('body-parser').json());

// set router
require('./routes')(app);

// boot
app.listen(process.env.PORT || 3000, (err) => {
  if (err) throw err;
});

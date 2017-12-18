'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host   : process.env.POSTGRES_HOST,
    dialect: 'postgres'
  }
);

const db = {
  Sequelize,
  sequelize
};

// register models
db.bots = db.sequelize.import('../../../db/models/bots');
db.users = db.sequelize.import('../../../db/models/users');
db.sessions = db.sequelize.import('../../../db/models/sessions');
db.channels = db.sequelize.import('../../../db/models/channels');

module.exports = db;

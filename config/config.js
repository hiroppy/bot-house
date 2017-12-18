require('dotenv').config();

module.exports = {
  development: {
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host    : process.env.POSTGRES_HOST,
    port    : process.env.POSTGRES_PORT,
    dialect : 'postgres',
    define  : {
      underscored: true
    }
  },
  production: {
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host    : process.env.POSTGRES_HOST,
    port    : process.env.POSTGRES_PORT,
    dialect : 'postgres',
    define  : {
      underscored: true
    }
  }
};

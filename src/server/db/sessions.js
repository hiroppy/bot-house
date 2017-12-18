'use strict';

const { sessions } = require('.');

async function find(query) {
  return await sessions.find({ where: query });
}

async function create(query = {}) {
  return await sessions.create(query);
}

module.exports = {
  find,
  create
};

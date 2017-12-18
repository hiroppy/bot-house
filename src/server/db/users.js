'use strict';

const { users } = require('.');

async function find(query) {
  return await users.find({ where: query });
}

async function create(query) {
  return await users.create(query);
}

async function update(query, user_id) {
  return await users.update(query, {
    where: { user_id }
  });
}

async function findAll(query = {}) {
  return await users.findAll({ where: query });
}

module.exports = {
  find,
  create,
  update,
  findAll
};

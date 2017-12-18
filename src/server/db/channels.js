'use strict';

const { channels } = require('.');

async function find(query = {}) {
  if (query.name && typeof query.name === 'string') {
    query.name = query.name['0'] === '#' ? query.name.slice(1) : query.name;
  }

  return await channels.find({ where: query });
}

async function create(query) {
  return await channels.create(query);
}

async function remove(query) {
  return await channels.destroy({ where: query });
}

async function findAll(query = {}) {
  return await channels.findAll({ where: query });
}

module.exports = {
  find,
  create,
  remove,
  findAll
};

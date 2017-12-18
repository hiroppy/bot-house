'use strict';

const { bots } = require('.');

async function find(query = {}) {
  return await bots.find({ where: query });
}

async function count(query = {}) {
  return await bots.count(query);
}

async function update(id, query = {}) {
  return await bots.update(query, {
    where    : { id },
    plain    : true,
    returning: true
  });
}

async function create(query) {
  return await bots.create(query);
}

async function remove(id) {

  // Error: Expected plain object, array or sequelize method in the options.where parameter of model.destroy.
  // can not write { where: id }
  // https://github.com/sequelize/sequelize/pull/5516
  return await bots.destroy({ where    : { id: id },
    returning: true

    // plain    : true
  });
}

async function findAll(query = {}) {
  return await bots.findAll({
    where: query,
    order: [['updated_at', 'DESC']]
  });
}

module.exports = {
  find,
  count,
  update,
  create,
  remove,
  findAll
};

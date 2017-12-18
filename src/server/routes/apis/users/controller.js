'use strict';

const { toCamel, toSnake } = require('convert-keys');
const bots = require('../../../db/users');

async function index(req, res) {
  try {
    const value = await bots.findAll();

    if (value === null || value.length === 0) return res.send({ data: []});

    return res.send({ data: value.map((v) => toCamel(v.dataValues)) });
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  index
};

'use strict';

const { toCamel } = require('convert-keys');
const bots = require('../../../db/bots');
const channels = require('../../../db/channels');

async function show(req, res) {
  try {
    const value = await bots.findAll({ channel_id: req.params.id });

    return res.send({ data: value.map((v) => toCamel(v.dataValues)) });
  } catch (e) {
    console.error(e);

    return res.status(500).send({ data: []});
  }
}

async function index(req, res) {
  try {
    const value = await channels.findAll();

    if (value === null || value.length === 0) return res.send({ data: []});

    return res.send({ data: value.map((v) => toCamel(v.dataValues)) });
  } catch (e) {
    console.error(e);

    return res.status(500).send({ data: []});
  };
}

module.exports = {
  show,
  index
};

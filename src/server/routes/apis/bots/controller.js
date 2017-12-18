'use strict';

const { toCamel, toSnake } = require('convert-keys');
const bots = require('../../../db/bots');
const channels = require('../../../db/channels');
const sessions = require('../../../db/sessions');
const { parseCookie } = require('../../../utils/cookies');
const { web } = require('../../../slack');

async function index(req, res) {
  let query = req.query;

  try {
    if (query.channelName) {
      const channel = await channels.find({ name: query.channelName });

      if (channel) {
        query = { channelId: channel.dataValues.channel_id };
      }
      else {
        return res.send({ data: []});
      }
    }

    const value = await bots.findAll(toSnake(query));

    if (value === null || value.length === 0) {
      return res.send({ data: []});
    }

    return res.send({ data: value.map((v) => toCamel(v.dataValues)) });
  } catch (e) {
    console.error(e);

    return res.status(500).send({ data: []});
  }
}

async function show(req, res) {
  try {
    const value = await bots.find({ id: req.params.id });

    if (value === null) return res.send({ data: {}});

    const data = toCamel(value.dataValues);
    const { dataValues: channel } = await channels.find({ channel_id: data.channelId });

    return res.send({ data: { ...data, channelName: channel.name }});
  } catch (e) {
    console.error(e);
  }
}

async function update(req, res) {
  try {

    // search the channel
    const channel = await channels.find({ name: req.body.channelName });

    if (channel === null) {

      // check to slack and get ID
    }
    else {
    }

    const body = {
      name               : req.body.name,
      icon               : req.body.icon,
      script             : req.body.script,
      private            : req.body.private,
      identification_word: req.body.identificationWord
    };

    // value is an array and 1st is undefined
    const value = await bots.update(req.params.id, body);

    if (value.length === 2) {
      const data = toCamel(value[1].dataValues);

      return res.send({ data });
    }
  } catch (e) {
    console.error(e);
  }
}

async function create(req, res) {
  try {
    const id = parseCookie(req);

    if (id === '') return res.status(401).send({ data: {}});

    // check creator
    const { user_id } = (await sessions.find({ session_id: id })).dataValues;

    // check channel
    const channel = await channels.find({ name: req.body.channelName });

    let channel_id;

    if (channel) channel_id = channel.dataValues.channel_id;

    // create new channel
    else {
      const channelList = await web.channels.list();

      if (channelList.ok) {
        const c = channelList.channels.find((c) => c.name === req.body.channelName);

        if (c) {
          channel_id = c.id;

          await channels.create({
            name: c.name,
            channel_id
          });
        }
        else {
          return res.status(404).send({ data: { message: 'could not find the channel' }});
        }
      }
    }

    const value = await bots.create({
      ...toSnake(req.body),
      user_id,
      channel_id
    });

    return res.send({ data: value.dataValues });
  } catch (e) {
    console.error(e);

    return res
      .status(500)
      .send({ data: {}});
  }
}

async function destroy(req, res) {
  try {
    const bot = await bots.find({ id: req.params.id });

    if (!bot) return res.status(404).send({});

    const channel_id = bot.dataValues.channel_id;

    await bots.remove(req.params.id);

    const num = await bots.count({ channel_id });

    if (num === 0) await channels.remove({ channel_id });

    // TODO: remove a user if a user doesn't have a bot
    return res.send({ data: {}});
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  show,
  index,
  update,
  create,
  destroy
};

'use strict';

const { find: findChannel } = require('../db/channels');
const { RtmClient, WebClient } = require('@slack/client');
const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;

const token = process.env.SLACK_BOT_TOKEN || '';

const web = new WebClient(token);
const rtm = new RtmClient(token);

let botId;

function getBotId() {
  return botId;
}

rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (rtmStartData) => {
  botId = rtmStartData.self.id;
});

rtm.start();

const slack = {
  rtm,
  web,
  getBotId,
  CLIENT_EVENTS
};

module.exports = slack;

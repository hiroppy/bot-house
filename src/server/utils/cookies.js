'use strict';

const uid             = require('uid-safe').sync;
const cookieSignature = require('cookie-signature');

const str  = '_bot_house';
const name = `${str}_cookie`;

// return _bots_house_session
function parseCookie(req) {
  if (!req) return '';

  return req.cookies[name];
}

function createCookie(host = '') {
  const id = uid(20);
  const value = cookieSignature.sign(id, str);
  const domain = host.includes(':') ? host.split(':')[0] : host;

  return {
    path: '/',
    name,
    value,
    domain
  };
}

module.exports = {
  parseCookie,
  createCookie
};

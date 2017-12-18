'use strict';

const { toCamel, toSnake } = require('convert-keys');
const { web } = require('../../../slack');
const users = require('../../../db/users');
const sessions = require('../../../db/sessions');
const { createCookie, parseCookie } = require('../../../utils/cookies');

async function cb(req, res) {
  try {
    if (typeof req.query.code !== 'string') {
    }

    const access = await web.oauth.access(
      process.env.SLACK_CLIENT_ID,
      process.env.SLACK_CLIENT_SECRET,
      req.query.code,
      { redirect_uri: `${process.env.SITE_URI}/auth/cb` }
    );

    const {
      id: user_id,
      profile,
      real_name
    } = (await web.users.info(access.user_id)).user;

    const exsited = !!(await users.find({ user_id }));

    const query = {
      user_id,
      real_name,
      icon: profile.image_192
    };

    if (exsited) await users.update(query, user_id);
    else await users.create(query);

    const cookie = createCookie(req.headers.host);

    await sessions.create({
      session_id: cookie.value,
      user_id
    });

    res.cookie(cookie.name, cookie.value, {
      path    : cookie.path,
      domain  : cookie.domain,
      httpOnly: true
    });

    res.redirect('/');
  } catch (e) {
    console.error(e);
  }
}

async function success(req, res) {
  try {
    const id = parseCookie(req);

    if (!id) return res.status(401)
      .send({
        data  : {},
        status: false
      });

    const session = await sessions.find({ session_id: id });

    if (session === null) {
      return res
        .status(401)
        .send({
          data  : {},
          status: false
        });
    }

    const { user_id } = session.dataValues;

    const user = (await users.find({ user_id })).dataValues;

    const data = toCamel(user);

    return res
      .send({
        data,
        status: true
      });
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  cb,
  success
};

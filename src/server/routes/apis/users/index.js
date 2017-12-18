'use strict';

const { Router } = require('express');
const {
  index
} = require('./controller');

const router = new Router();

router.get('/', index);

module.exports = router;

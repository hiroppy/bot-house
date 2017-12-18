'use strict';

const { Router } = require('express');
const {
  show,
  index
} = require('./controller');

const router = new Router();

router.get('/', index);
router.get('/:id', show);

module.exports = router;

'use strict';

const { Router } = require('express');
const {
  cb,
  success
} = require('./controller');

const router = new Router();

router.get('/cb', cb);
router.post('/success', success);

module.exports = router;

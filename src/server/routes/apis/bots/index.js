'use strict';

const { Router } = require('express');
const {
  show,
  index,
  update,
  create,
  destroy
} = require('./controller');

const router = new Router();

router.get('/', index);
router.get('/:id', show);
router.put('/:id', update);
router.delete('/:id', destroy);
router.post('/create', create);

module.exports = router;

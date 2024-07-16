const express = require('express');
const v1 = require('./v1/index');

const router = express.Router();

// Mount api versions
router.use('/v1', v1);
// router.use('/v2', v2);

module.exports = router;

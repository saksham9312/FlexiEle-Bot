const express = require('express');
const router = express.Router();
console.log('router exported!');

router.use('/api', require('./api'));
module.exports = router;
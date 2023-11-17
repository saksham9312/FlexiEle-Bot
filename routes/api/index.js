const express = require('express');
const router = express.Router();
const homeController = require('../../controllers/home_controller')
console.log('router exported!');

router.post('/', homeController.home);
module.exports = router;
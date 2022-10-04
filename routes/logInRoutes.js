const express = require('express');
const logInController = require('../controllers/logInController');
const router = express.Router();

router.get('/' , logInController.logInPage);

router.post('/' , logInController.loggingIn);

module.exports = router;
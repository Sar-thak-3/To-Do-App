const express = require('express');
const signUpController = require('../controllers/signUpController');
const router = express.Router();

router.get('/' , signUpController.signUpPage);

router.post('/' , signUpController.signingUp);

module.exports = router;
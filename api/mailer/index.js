"use strict";

const express = require('express');
const router = express.Router();

const Controller = require('./mailerController');

router.post('/send', Controller.sendMail);


module.exports = router;
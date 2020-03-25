'use strict';
// userRoute
const express = require('express');
const passport = require('passport');
const router = express.Router();
const userController = require('../controllers/userController.js');
const userModel = require('../models/userModel');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
passport.authenticate('jwt', {session: false});

router.post('/user', async (req, res) => {
    const myuser = await userModel.create({ name: 'Mary', email: 'm@met.fi', password: 'abc' });
    res.send(`user created with id ${myuser._id}`);
});


module.exports = router;

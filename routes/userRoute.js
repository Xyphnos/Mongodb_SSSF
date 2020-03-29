'use strict';
// userRoute
const express = require('express');
const passport = require('passport');
const router = express.Router();
const userController = require('../controllers/userController.js');
const user = require('../models/userModel');


passport.authenticate('jwt', {session: false});

router.route('/:id')
    .get(userController.user_get)
    .delete(userController.user_delete);

router.route('/')
    .post(userController.user_post)
    .put(userController.user_edit);

router.route('/list')
    .get(userController.user_list_get);




module.exports = router;

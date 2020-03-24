'use strict';
// userRoute
const express = require('express');
const passport = require('passport');
const router = express.Router();
const userController = require('../controllers/userController.js');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
passport.authenticate('jwt', {session: false});

router.get('/list', userController.user_list_get);

router.get('/:id', userController.user_get);

router.post('/', (req, res) => {
    res.send('Log successful')
});

router.put('/', (req, res) => {
    res.send('With this endpoint you can edit users.');
});

router.delete('/', (req, res) => {
    res.send('With this endpoint you can delete users.');
});

module.exports = router;

'use strict';
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);

router.get('/', async (req, res) => {
    console.log('someone visit my url ☺');
    res.send(await cat.find().populate('owner'));
});


router.get('/test', (req, res) => {
    console.log('test url', req);
    const cat = {
        name: 'Garfield',
        age: 15,
        weight: 25
    };
    res.json(cat);
});




module.exports = router;
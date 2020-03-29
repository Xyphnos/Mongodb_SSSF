'use strict';
// catRoute
const express = require('express');
const multer  = require('multer');
const passport = require('passport');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();
const cat = require('../models/cat');
const catController = require('../controllers/catController');

passport.authenticate('jwt', {session: false});

router.get('/list', catController.cat_list_get);

router.route('/:id')
    .get(catController.cat_get)
    .put(catController.cat_edit)
    .delete(catController.cat_delete);

router.post('/uploads', upload.single('file_name'), (req, res) => {
    console.log('test');
    res.send('upload successful');
});

router.route('/')
    .post(catController.cat_post);

module.exports = router;

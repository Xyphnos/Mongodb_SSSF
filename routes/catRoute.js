'use strict';
// catRoute
const express = require('express');
const multer  = require('multer');
const passport = require('passport');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();
const catController = require('../controllers/catController.js');

passport.authenticate('jwt', {session: false});

router.get('/list', catController.cat_list_get);

router.get('/:id', catController.cat_get);

router.post('/uploads', upload.single('file_name'), (req, res) => {
    console.log('test');
    res.send('upload successful');
});

router.post('/cat', async(req, res) => {
    const mycat = await cat.create({ name: 'garfield', age: 7, owner: '5e7b0ae1f304f22815649e05' });
    //const myuser = find
    //myuser.cats.push(mycat._id);
    //save()
    res.send(`cat created with id: ${mycat._id}`);
});


router.put('/', (req, res) => {
    res.send('With this endpoint you can edit cats.');
});

router.delete('/', (req, res) => {
    res.send('With this endpoint you can delete cats.');
});

module.exports = router;

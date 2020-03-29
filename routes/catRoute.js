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

router.get('/:id', catController.cat_get);

router.post('/uploads', upload.single('file_name'), (req, res) => {
    console.log('test');
    res.send('upload successful');
});

router.route('/')
    .get(async (req, res) => {
        try {
            res.send(
                await cat
                    .find()
                    .populate('owner')
            );
        } catch(e){
            console.log(e);
        }
    })
    .post(async(req, res) => {
        try {
            const creCat = await cat.create({
                name: req.body.name,
                age: req.body.age,
                owner: req.body.owner,
                gender: req.body.gender,
                color: req.body.color,
                weight: req.body.weight,
            });
            res.send(`cat created with id: ${creCat._id}`);
        }catch(e) {
            console.log(e);
        }

    })


    .put(async(req, res) => {
        try{
        const putCat = await cat.updateOne({
            name: req.body.name,
            age: req.body.age,
            owner: req.body.owner,
            gender: req.body.gender,
            color: req.body.color,
            weight: req.body.weight,
        });
        res.send(`cat edited with id: ${putCat._id}`);
    }catch(e) {
        console.log(e);
    }
    })


    .delete(async(req, res) => {
        try{
        console.log(`deleting cat with id: ${req.body._id}`);
        await cat.deleteOne({_id: req.body._id});
        res.send('Cat deleted.');
    }catch(e) {
        console.log(e);
    }
    });

module.exports = router;

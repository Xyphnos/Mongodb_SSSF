'use strict';
// userRoute
const express = require('express');
const passport = require('passport');
const router = express.Router();
const userController = require('../controllers/userController.js');
const userModel = require('../models/userModel');


passport.authenticate('jwt', {session: false});

router.route('/')
    .get(async (req, res) => {
        try {
            res.send(await user.find());
        } catch(e) {
            console.log(e);
        }
    })
    .post(async (req, res) => {
        try {
            const newUser = await user.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            res.send(`New user with id ${newUser._id} created.`)
        } catch(e){
            console.log(e)
        }
    })
    .put(async (req, res) => {
        try {
            const upUser = await user.updateOne({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            res.send(`User with id ${upUser._id} edited.`);
        } catch(e){
            console.log(e)
        }
    })
    .delete(async (req, res) => {
        try{
            console.log(`deleting user with id: ${req.body._id}`);
            await user.deleteOne({_id: req.body._id});
            res.send('user deleted.');
        }catch(e) {
            console.log(e);
        }
        res.send('With this endpoint you can delete users');
    });


router.route('/:id')
    .get(async (req, res) => {
        res.send(await user.findById(req.params.id));
    });



module.exports = router;

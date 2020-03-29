'use strict';
// userController
const userModel = require('../models/userModel');


const user_list_get = async(req, res) => {
    try {
        res.json(
            await userModel.find()
        )
    }catch(e){
        console.log(e)
    }
};

const user_get = async (req, res) =>{
    try {
        const getuser = await userModel.findById(req.query.id);
        res.json(getuser);
    } catch (e) {
        console.error('user_get', e);
    }
};

const user_post = async (req, res) => {
        try {
            const newUser = await userModel.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            res.send(`New user with id ${newUser._id} created.`)
        } catch(e){
            console.log(e)
        }
};
const user_edit = async (req, res) => {
    try {
        const upUser = await userModel.updateOne({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.send(`User with id ${upUser._id} edited.`);
    } catch(e){
        console.log(e)
    }
};
const user_delete = async (req, res) => {
    try{
        console.log(`deleting user with id: ${req.query._id}`);
        await userModel.deleteOne({_id: req.query._id});
        res.send('user deleted.');
    }catch(e) {
        console.log(e);
    }
    res.send('With this endpoint you can delete users');
};


module.exports = {
    user_list_get,
    user_get,
    user_post,
    user_edit,
    user_delete,
};
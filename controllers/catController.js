'use strict';
// catController
const catModel = require('../models/cat');

const cat_list_get = async (req, res) => {
    try {
        res.send(
            await catModel
                .find()
                .populate('owner')
        );
    } catch(e){
        console.log(e);
    }
};

const cat_get = async (req, res) => {
    try {
        res.send(
            await catModel
                .findById(req.params.id)
                .populate('owner')
        );
    } catch(e){
        console.log(e);
    }
};


const cat_post = async(req, res) => {
    try {
        const creCat = await catModel.create({
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

};

const cat_edit = async(req, res) => {
    try{
        const putCat = await catModel.updateOne(req.params.id,{
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
};
const cat_delete = async(req, res) => {
    try{
        console.log(`deleting cat with id: ${req.params._id}`);
        await catModel.deleteOne({_id: req.params._id});
        res.send('Cat deleted.');
    }catch(e) {
        console.log(e);
    }
};

module.exports = {
    cat_list_get,
    cat_get,
    cat_post,
    cat_edit,
    cat_delete,
};
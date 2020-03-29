'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catSchema = new Schema({
    name: String,
    age: Number,
    owner: {
        type: mongoose.ObjectId,
        ref: 'user',
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'unkown'],
        required: true,
    },
    color: String,
    weight: Number,
});

module.exports = mongoose.model("cat", catSchema);

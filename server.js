'use strict';

require('dotenv').config();
const express = require('express');
const db = require('./models/db');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const passport = require('./utils/pass');
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');

server.use('/user', userRoute);

server.use(cors());
server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded


server.use('/auth', authRoute);
/*
server.use('/cat', passport.authenticate('jwt', {session: false}), catRoute);
server.use('/user', passport.authenticate('jwt', {session: false}), userRoute);
*/

db.on('connected', () => {
    server.listen(port, () => console.log(`App listening on port ${port}!`));
});

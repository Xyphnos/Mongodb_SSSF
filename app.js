'use strict';

require('dotenv').config();
const express = require('express');
const db = require('./models/db');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const passport = require('./utils/pass');
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');


app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.use('/auth', authRoute);
app.use('/cat', passport.authenticate('jwt', {session: false}), catRoute);
app.use('/user', passport.authenticate('jwt', {session: false}), userRoute);

db.on('connected', () => {
    app.listen(port, () => console.log(`App listening on port ${port}!`));
});

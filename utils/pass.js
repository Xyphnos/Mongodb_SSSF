'use strict';
const passport = require('passport');
const passportJWT = require("passport-jwt");
const userModel = require('../models/userModel');
const Strategy = require('passport-local').Strategy;
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

// local strategy for username password login
passport.use(new Strategy(
    (username, password, done) => {
        try {

            const user = userModel.getUserLogin(username);
            console.log('Local strategy', user); // result is binary row

            if (user === undefined) {
                return done(null, false, {message: 'Incorrect email.'});
            }

            if (user.password !== password) {
                return done(null, false, {message: 'Incorrect password.'});
            }

            return done(null, {...user}, {message: 'Logged In Successfully'});
            // use spread syntax to create shallow copy to get rid of binary row type
        } catch (err) {
            return done(err);
        }
    }));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'asdw777'
    },
    (jwtPayload, done) => {

        const user = userModel.getUser(JwtPayload.id);
        console.log('pl user', user);
        if (user){
            return done(null, user);
        }
        else{
            return done(null, false);
        }
}
));


module.exports = passport;
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/user');

var options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = "hospital";

passport.use(
  new JwtStrategy(options, function (jwtPayLoad, done) {
    User.findById(jwtPayLoad._id, function (err, user) {
      if (err) {
        console.log("Error in finding user", err);

        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
            }
    });
  })
);

module.exports  = passport ;
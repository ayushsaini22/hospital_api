//Set port, import express 
const express = require("express");
const app = express();
const port = 8000;
const db = require("./config/mongoose");

//Authentication
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
const passportJWT = require('./config/passport-jwt-strategy');

//Body Parser 
app.use(express.urlencoded({ extended: true }));


app.use(passport.initialize());
app.use(passport.session());


app.use(passport.setAuthenticatedUser);
// Use Express Router
app.use("/", require("./routes"));
  
//Listening on server 
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the Server: ${err}`);
    return;
  }
  console.log("Server Running Successfully on port : ", port);
});



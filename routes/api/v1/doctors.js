//Require Express and Router
const express = require("express");
const router = express.Router();

//Importing relevant controller
const usersApi = require('../../../controllers/api/v1/users_api');

//Require passport & jwt
const passport = require('passport');
const jwt = require('../../../config/passport-jwt-strategy');

//Routes
router.use("/register", usersApi.register);
router.use("/login", usersApi.login);
router.use("/", (req, res) => {
    res.status(200).json({
        message : "Welcome to Doctors Home Page"
    })
} );


//Exporting Router
module.exports = router;
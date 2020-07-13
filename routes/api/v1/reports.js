//Require Express and Router
const express = require("express");
const router = express.Router();

//Importing relevant controller
const reportsApi = require('../../../controllers/api/v1/reports_api');

//Require passport & jwt
const passport = require('passport');
const jwt = require('../../../config/passport-jwt-strategy');

//Routes
router.use("/:status",passport.authenticate('jwt',{session:false}), reportsApi.filterReport);
router.use("/", (req, res) => {
    return res.status(200).json({
        message : "Welcome to Reports Home Page"
    })
} );

//Exporting Router
module.exports = router;
//Require Express and Router
const express = require("express");
const router = express.Router();

//Importing relevant controller
const patientsApi = require('../../../controllers/api/v1/patients_api');

//Require passport & jwt
const passport = require('passport');
const jwt = require('../../../config/passport-jwt-strategy');

//Routes
router.post("/register", passport.authenticate('jwt',{session:false}), patientsApi.register);
router.post("/:id/create_report", passport.authenticate('jwt',{session:false}), patientsApi.createReport);
router.get("/:id/all_reports", passport.authenticate('jwt',{session:false}), patientsApi.allReports);
router.use("/", (req, res) => {
    res.status(200).json({
        message : "Welcome to Patients Home Page"
    })
} );



//Exporting Router
module.exports = router;
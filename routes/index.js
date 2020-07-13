const express = require("express");
const router = express.Router();
console.log("Router Loaded");



router.use("/api", require("./api"));

router.get('/' , (req, res) => {
    res.status(200).json({
    message : "Welcome To Home Page"
})
});


// for any further routes, access from here
// router.use('/routerName', require('./routerfile));

module.exports = router;
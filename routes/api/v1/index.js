//Require Express and Router
const express = require("express");
const router = express.Router();
//Routes
router.use("/reports", require("./reports"));
router.use("/doctors", require("./doctors"));
router.use("/patients", require("./patients"));
router.use('/' , (req, res) => {
    res.status(200).json({
    message : "Welcome To Api v1 Page"
})
});

module.exports = router;

//require mongoose
const mongoose = require("mongoose");
//setup DB
mongoose.connect("mongodb://localhost/hospital_api_dev",{
  useNewUrlParser: true,
});
//connect to DB
const db = mongoose.connection;
//on error
db.on("error", console.error.bind(console, "connection error:"));
//once connection is open
db.once("open", function () {
  console.log("Successfull Connected to the Database");
});

module.exports = db;


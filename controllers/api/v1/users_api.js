const User = require('../../../models/user');
const jwt = require('jsonwebtoken');
//Doctor Login
module.exports.login = async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await User.findOne({email : email});

        if(!user || user.password != password){
            return res.status(422).json({
                message: "Invalid email or password"
            })
        }

        return res.status(200).json({
            message: "Signed In Successfully",
            token : jwt.sign((await user).toObject() , 'hospital' , {expiresIn : "24h"})
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
            error
        })
    }
}
//Doctor Register
module.exports.register = async function(req,res){
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("error", err);
          return res.status(500).json({
            message: "Internal Server Error",
            error
          })
        }

        return res.status(200).json({
            message: "Doctor Registered Successfully",
            err
        })
      });
    } else {
      
      return res.status(200).json({
            message: "Already Registered",
            error
        })
    }
  
}
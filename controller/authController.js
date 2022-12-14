const { userModel: User } = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const Joi = require("@hapi/joi");

// User Registration
const userRegistration = asyncHandler(async (req, res, next) => {
  // console.log(req.body);
  const { email } = req.body;
  try {
    let userExist = await User.findOne({ email: email });
    if (!userExist) {
      let newUser = await User.create(req.body);
      res.status(200).json(newUser);
    } else {
      next(error);
    }
  } catch (error) {
    res.status(400);
    throw new Error("Email Already Exists!");
  }
});

// User Login

module.exports = { userRegistration };

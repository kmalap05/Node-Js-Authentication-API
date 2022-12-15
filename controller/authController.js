const { userModel: User } = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const Joi = require("@hapi/joi");
const { generateToken } = require("../config/jwtToken");

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
const userLogin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist && (await userExist.isPasswordMatched(password))) {
      res
        .status(200)
        .header("auth-token", await generateToken(userExist._id))
        .json({
          token: generateToken(userExist._id),
        });
    } else {
      next(error);
    }
  } catch (error) {
    res.status(400);
    throw new Error("User Not Found!");
  }
});

module.exports = { userRegistration, userLogin };

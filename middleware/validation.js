const asyncHandler = require("express-async-handler");
const Joi = require("@hapi/joi");

// User Registration Data Validation
const registerValidation = asyncHandler(async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required().min(6),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  });

  try {
    const { error } = schema.validate(req.body);
    // console.log(error);
    error ? next(error) : next();
  } catch (error) {
    res.status(404);
    throw new Error("Validation Failed!");
  }
});

// User Login Data Validation
const loginValidation = asyncHandler(async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  });

  try {
    const { error } = await schema.validate(req.body);
    // console.log(error);
    error ? next(error) : next();
  } catch (error) {
    res.status(404);
    throw new Error("Validation Failed!");
  }
});

module.exports = { registerValidation, loginValidation };

const express = require("express");
const { userRegistration, userLogin } = require("../controller/authController");
const {
  registerValidation,
  loginValidation,
} = require("../middleware/validation");

const router = express.Router();

router.post("/register", registerValidation, userRegistration);
router.post("/login", loginValidation, userLogin);

module.exports = { router };

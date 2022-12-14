const express = require("express");
const { userRegistration } = require("../controller/authController");
const { registerValidation } = require("../middleware/validation");

const router = express.Router();

router.post("/register", registerValidation, userRegistration);

module.exports = { router };

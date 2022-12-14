const express = require("express");
require("dotenv").config();
const { dbConnect } = require("./config/dbConnect");

// Express App Initialising
const app = express();

// Database Connection
dbConnect();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Connected To PORT: ${PORT}`);
});

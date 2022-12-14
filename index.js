const express = require("express");
require("dotenv").config();
const { dbConnect } = require("./config/dbConnect");
const { router: authRoute } = require("./routes/authRoute");
const { pageNotFound, errorHandler } = require("./middleware/errorHandler");

// Variable Initialisation
const PORT = process.env.PORT;

// Express App Initialising
const app = express();

// Express JSON Middleware
app.use(express.json());

// Database Connection
dbConnect();

// APIs
app.use("/api/user", authRoute);

// Middlewares
app.use(pageNotFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Connected To PORT: ${PORT}`);
});

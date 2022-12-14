const mongoose = require("mongoose");

const dbConnect = () => {
  const databaseURL = process.env.MONGODB_URL;
  mongoose.set("strictQuery", false);
  mongoose
    .connect(databaseURL)
    .then(() => {
      console.log("Database Connected Successfully!");
    })
    .catch((error) => {
      console.log("Connection Failed");
    });
};

module.exports = { dbConnect };

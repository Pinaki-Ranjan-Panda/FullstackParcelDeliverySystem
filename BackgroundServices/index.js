const express = require("express");
const app = express();
const dotenv = require("dotenv");
const corn = require("node-cron");
const mongoose = require("mongoose");

dotenv.config();

const PORT = process.env.PORT;
const DB = process.env.DB;

//SERVER
app.listen(PORT, () => {
  console.log(`Background service is running on port ${PORT}`);
});

//TASK SCHEDULER
const run = () => {
  corn.schedule("* * * * * *", () => {
    // Here you can add the code to perform the task
  });
};
run();

//DATABASE CONNECTION
mongoose
  .connect(DB)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

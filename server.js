const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.q1es5.mongodb.net/test`
  )
  .then(console.log("Connected to DB ✅"));

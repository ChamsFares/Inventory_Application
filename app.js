const express = require("express");
const app = express();
const userRouter = require("./routes/router");
require("dotenv").config();

app.use("/", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});

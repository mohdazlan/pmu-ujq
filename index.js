const express = require("express");

const morgan = require("morgan");

const tourRouter = require("./routes/tourRoutes");
const docRouter = require("./routes/docRoutes");
const userRouter = require("./routes/userRoutes");
const app = express();

//add middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("tiny"));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/users", userRouter);
// mounting a router on a new route
app.use("/api/v1/docs", docRouter);
app.get("/", function (req, res) {
  res.send("Hello World!");
});
module.exports = app;

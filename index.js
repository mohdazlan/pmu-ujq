const express = require("express");

const docRouter = require("./routes/docRoutes");
const userRouter = require("./routes/userRoutes");
const morgan = require("morgan");
const app = express();

app.use(morgan("tiny"));
app.use(express.json());

//adding custom middleware
app.use((req, res, next) => {
  console.log("Hello from the middleware 🧻 ");
  next();
});

// second middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString;
  next();
});
app.use("/api/v1/docs", docRouter);

app.use("/api/v1/users", userRouter);

module.exports = app;

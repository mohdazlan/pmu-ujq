const express = require("express");

const docRouter = require("./routes/docRoutes");
const userRouter = require("./routes/userRoutes");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.use("/api/v1/docs", docRouter);

app.use("/api/v1/users", userRouter);

//basic port configuration
const port = 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

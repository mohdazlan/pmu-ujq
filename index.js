const express = require("express");

const app = express();

// basic routing
// app.get("/", (req, res) => {
//   res.status(200).send("Hello from the server side!");
// });

// app.post("/", (req, res) => {
//   res
//     .status(200)
//     .json({ message: "Hello from the server side", app: "Natours" });
// });
app.get("/api/v1/docs", (req, res) => {
  res.send("hello world");
});

//basic port configuration
const port = 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

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

app.post("/api/v1/docs", (req, res) => {
  console.log(req.body);
  res.send("Done");
});

app.get("/api/v1/docs/:id", (req, res) => {
  console.log(req.params);

  // const id = req.params.id * 1;
  // const doc = docs.find((el) => el.id === id);
});

//delete request
//docs here refer to content in a JSON file or Database
app.delete("/api/v1/docs/:id", (req, res) => {
  if (req.params.id * 1 > docs.length) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  //204 means no content
  res.status(204).json({
    status: "success",
    data: { tour: "<Updated tour here...>" },
  });
});

//basic port configuration
const port = 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

const app = require("./app");

//basic port configuration
const port = 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

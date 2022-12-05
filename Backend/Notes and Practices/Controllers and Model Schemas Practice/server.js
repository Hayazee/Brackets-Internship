const express = require("express");
const server = express();
const app = server;
const PORT = 9669;

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
}),
  //   serving a static file in express .js
  app.use("./Home.html", express.static(__dirname + "/Home.html"));
app.listen(PORT, console.log("Server Started"));

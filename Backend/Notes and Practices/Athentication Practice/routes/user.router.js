const express = require("express");
const UserRouter = express.Router();

// users route
UserRouter.get("/Users", (req, res) => {
  console.log(Users);
  res.status(200).json({ List_Of_Students });
});

// --------------- October 26 - 2022 Wednesday ---------------
// installed express.js
// installed nodemon
// installed postman

const bodyParser = require("body-parser");
const express = require("express");
const server = express();
const PORT = 2400;

// modules
const {
  users,
  getUser,
  List_Of_Users,
  deleteUser,
  addUser,
  editAndUpdateUser,
} = require("./users.js");

const app = server;
app.use(express.json({ extended: false }));

// current route
app.get("/", (req, res) => {
  console.log("Hey");
  res.status(200).json(`Server Started...Happy Coding :D`);
});

// users route
app.get("/users", (req, res) => {
  console.log(List_Of_Users);
  res.status(200).json({ List_Of_Users });
});

// getting users by id route
app.get("/users/", (req, res) => {
  console.log(req.query.id);
  const userId = req.query.id;
  const user = getUser(userId);
  console.log(userId, user);
  res.send(user);
});

// add a new user
app.post("/users", (req, res) => {
  const user = req.body;
  const addingUser = addUser(user);
  console.log(addingUser);
  res.send(addingUser);
});

// delete user by id
app.delete("/users/userId", (req, res) => {
  const userId = req.params;
  console.log(userId);
  const user = deleteUser(userId);
  console.log(user);
  res.send(user);
});

// editing and updating a user
app.patch("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const body = req.body;
  const user = editAndUpdateUser(parseInt(userId), body);
  res.send(user);
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

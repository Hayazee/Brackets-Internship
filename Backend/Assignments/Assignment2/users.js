// --------------- October 26 - 2022 Wednesday ---------------
const fs = require("fs");

// all users
let users = fs.readFileSync("users.json", "utf-8");
users = JSON.parse(users);

const List_Of_Users = users;

// get any user by id
const getUser = (userId) => {
  userId = parseInt(userId);
  return users.find((user) => user.id == userId);
};

// add a new user
const addUser = (user) => {
  users.push(user);
  fs.writeFileSync("users.json", JSON.stringify(users), "utf-8");
  console.log(users);
  return "User Added Successfully";
};

// delete or remove an existing user
const deleteUser = (userId) => {
  users = users.filter((user) => user.id !== userId);
  fs.writeFileSync("users.json", JSON.stringify(users), "utf-8");
  console.log(users);
  return "User Deleted Successfully";
};

// edit and update an existing user
const editAndUpdateUser = (userId, body) => {
  users.find((user) => {
    if (user.id == userId) {
      user.id = body.id ? body.id : user.id;
      user.name = body.name ? body.name : user.name;
      user.age = body.age ? body.age : user.age;
      user.role = body.role ? body.role : user.role;
    }
  });
  fs.writeFileSync("users.json", JSON.stringify(users), "utf-8");
  return "User Updated Successfully";
};

module.exports = {
  users,
  getUser,
  List_Of_Users,
  deleteUser,
  addUser,
  editAndUpdateUser,
};

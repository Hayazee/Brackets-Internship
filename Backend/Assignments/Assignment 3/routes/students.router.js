const express = require("express");
const studentRouter = express.Router();

const {
  getStudent,
  List_Of_Students,
  deleteStudent,
  addStudent,
  editAndUpdateStudent,
} = require("../Students/students.js");

// students route
studentRouter.get("/students", (req, res) => {
  console.log(List_Of_Students);
  res.status(200).json({ List_Of_Students });
});

// getting a student by id route
studentRouter.get("/students/:studentId", (req, res) => {
  console.log(req.params);
  const { studentId } = req.params;
  const student = getStudent(studentId);
  console.log(studentId, student);
  res.send(student);
});

// add a new student
studentRouter.post("/students", (req, res) => {
  const student = req.body;
  const addingUser = addStudent(student);
  console.log(addingUser);
  res.send(addingUser);
});

// editing and updating a student
studentRouter.patch("/students/:studentId", (req, res) => {
  const { studentId } = req.params;
  const body = req.body;
  const student = editAndUpdateStudent(parseInt(studentId), body);
  res.send(student);
});

// delete student by id
studentRouter.delete("/students/:studentId", (req, res) => {
  const { studentId } = req.params;
  console.log(studentId);
  const student = deleteStudent(studentId);
  console.log(student);
  res.send(student);
});

module.exports = studentRouter;

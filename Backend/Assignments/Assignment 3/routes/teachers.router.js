const express = require("express");
const teacherRouter = express.Router();

const {
  getTeacher,
  List_Of_Teachers,
  deleteTeacher,
  addTeacher,
  editAndUpdateTeacher,
} = require("../Teachers/teachers.js");

// teachers route
teacherRouter.get("/teachers/", (req, res) => {
  console.log(List_Of_Teachers);
  res.status(200).json({ List_Of_Teachers });
});

// getting teachers by id route
teacherRouter.get("/teachers/:teacherId", (req, res) => {
  console.log(req.params);
  const { teacherId } = req.params;
  const teacher = getTeacher(teacherId);
  console.log(teacherId, teacher);
  res.send(teacher);
});

// add a new teacher
teacherRouter.post("/teachers/", (req, res) => {
  const teacher = req.body;
  const addingTeacher = addTeacher(teacher);
  console.log(addingTeacher);
  res.send(addingTeacher);
});

// editing and updating a teacher
teacherRouter.patch("/teachers/:teacherId", (req, res) => {
  const { teacherId } = req.params;
  const body = req.body;
  const teacher = editAndUpdateTeacher(parseInt(teacherId), body);
  res.send(teacher);
});

// delete teacher by id
teacherRouter.delete("/teachers/:teacherId", (req, res) => {
  const { teacherId } = req.params;
  console.log(teacherId);
  const teacher = deleteTeacher(teacherId);
  console.log(teacher);
  res.send(teacher);
});

module.exports = teacherRouter;

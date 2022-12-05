// --------------- October 26 - 2022 Wednesday ---------------
// installed express.js
// installed nodemon
// installed postman

const bodyParser = require("body-parser");
const express = require("express");
const server = express();
const PORT = 2500;

// router imports
const studentRouter = require("./routes/students.router");
const teacherRouter = require("./routes/teachers.router");
const classesRouter = require("./routes/classes.router");

const app = server;
app.use(express.json({ extended: false }));

// current route
app.get("/", (req, res) => {
  console.log("Hey");
  res.status(200).json(`Server Started...Happy Coding :D`);
});

////////////////////// ~~~~~~~~~~~ Students ~~~~~~~~~~~~~~~~~ //////////////////////
// students route
app.use(studentRouter);

// getting students by id route
app.use(studentRouter);

// add a new student
app.use(studentRouter);

// delete student by id
app.use(studentRouter);

// editing and updating a student
app.use(studentRouter);

////////////////////// ~~~~~~~~~~~ Teachers ~~~~~~~~~~~~~~~~~ //////////////////////
// teachers route
app.use(teacherRouter);

// getting teachers by id route
app.use(teacherRouter);

// add a new teacher
app.use(teacherRouter);

// delete teacher by id
app.use(teacherRouter);

// editing and updating a teacher
app.use(teacherRouter);

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

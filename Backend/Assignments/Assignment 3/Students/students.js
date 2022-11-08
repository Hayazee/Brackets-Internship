const fs = require("fs");

// all students
let students = fs.readFileSync("students.json", "utf-8");
students = JSON.parse(students);

const List_Of_Students = students;

// get any student by id
const getStudent = (studentId) => {
  studentId = parseInt(studentId);
  return students.find((student) => student.id == studentId);
};

// add a new student
const addStudent = (student) => {
  students.push(student);
  fs.writeFileSync("students.json", JSON.stringify(students), "utf-8");
  console.log(students);
  return "Student Added Successfully";
};

// delete or remove an existing student
const deleteStudent = (studentId) => {
  students = students.filter((student) => student.id !== studentId);
  fs.writeFileSync("students.json", JSON.stringify(students), "utf-8");
  console.log(students);
  return "Student Deleted Successfully";
};

// edit and update an existing student
const editAndUpdateStudent = (studentId, body) => {
  students.find((student) => {
    if (student.id == studentId) {
      student.id = body.id ? body.id : student.id;
      student.name = body.name ? body.name : student.name;
      student.age = body.age ? body.age : student.age;
      student.role = body.role ? body.role : student.role;
    }
  });
  fs.writeFileSync("students.json", JSON.stringify(students), "utf-8");
  return "Student Updated Successfully";
};

module.exports = {
  students,
  getStudent,
  List_Of_Students,
  deleteStudent,
  addStudent,
  editAndUpdateStudent,
};

// --------------- October 26 - 2022 Wednesday ---------------
const fs = require("fs");

// all teachers
let teachers = fs.readFileSync("teachers.json", "utf-8");
teachers = JSON.parse(teachers);

const List_Of_Teachers = teachers;
console.log(List_Of_Teachers);

// get any Teacher by id
const getTeacher = (teacherId) => {
  teacherId = parseInt(teacherId);
  return teachers.find((Teacher) => Teacher.id == teacherId);
};

// add a new Teacher
const addTeacher = (Teacher) => {
  teachers.push(Teacher);
  fs.writeFileSync("teachers.json", JSON.stringify(teachers), "utf-8");
  console.log(teachers);
  return "Teacher Added Successfully";
};

// delete or remove an existing Teacher
const deleteTeacher = (teacherId) => {
  teachers = teachers.filter((Teacher) => Teacher.id !== teacherId);
  fs.writeFileSync("teachers.json", JSON.stringify(teachers), "utf-8");
  console.log(teachers);
  return "Teacher Deleted Successfully";
};

// edit and update an existing Teacher
const editAndUpdateTeacher = (teacherId, body) => {
  teachers.find((Teacher) => {
    if (Teacher.id == teacherId) {
      Teacher.id = body.id ? body.id : Teacher.id;
      Teacher.name = body.name ? body.name : Teacher.name;
      Teacher.age = body.age ? body.age : Teacher.age;
      Teacher.class = body.class ? body.class : Teacher.class;
    }
  });
  fs.writeFileSync("teachers.json", JSON.stringify(teachers), "utf-8");
  return "Teacher Updated Successfully";
};

module.exports = {
  teachers,
  getTeacher,
  List_Of_Teachers,
  deleteTeacher,
  addTeacher,
  editAndUpdateTeacher,
};

// --------------- October 26 - 2022 Wednesday ---------------
const fs = require("fs");

// all classes
let classes = fs.readFileSync("classes.json", "utf-8");
classes = JSON.parse(classes);

const List_Of_Classes = classes;
console.log(List_Of_Classes);

// get any Class by id
const getClass = (classId) => {
  classId = parseInt(classId);
  return classes.find((Class) => Class.id == classId);
};

// add a new Class
const addClass = (Class) => {
  classes.push(Class);
  fs.writeFileSync("classes.json", JSON.stringify(classes), "utf-8");
  console.log(classes);
  return "Class Added Successfully";
};

// delete or remove an existing Class
const deleteClass = (classId) => {
  classes = classes.filter((Class) => Class.id !== classId);
  fs.writeFileSync("classes.json", JSON.stringify(classes), "utf-8");
  console.log(classes);
  return "Class Deleted Successfully";
};

// edit and update an existing Class
const editAndUpdateClass = (classId, body) => {
  classes.find((Class) => {
    if (Class.id == classId) {
      Class.id = body.id ? body.id : Class.id;
      Class.name = body.name ? body.name : Class.name;
      Class.age = body.age ? body.age : Class.age;
      Class.class = body.class ? body.class : Class.class;
    }
  });
  fs.writeFileSync("classes.json", JSON.stringify(classes), "utf-8");
  return "Class Updated Successfully";
};

module.exports = {
  classes,
  getClass,
  List_Of_Classes,
  deleteClass,
  addClass,
  editAndUpdateClass,
};

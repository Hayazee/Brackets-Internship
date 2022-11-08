const express = require("express");
const classesRouter = express.Router();

const {
  getClass,
  List_Of_Classes,
  deleteClass,
  addClass,
  editAndUpdateClass,
} = require("../Classes/classes.js");

// Classes route
classesRouter.get("/classes", (req, res) => {
  console.log(List_Of_Classes);
  res.status(200).json({ List_Of_Classes });
});

// getting a classVar by id route
classesRouter.get("/classes/:classVarId", (req, res) => {
  console.log(req.params);
  const { classVarId } = req.params;
  const classVar = getClass(classVarId);
  console.log(classVarId, classVar);
  res.send(classVar);
});

// add a new classVar
classesRouter.post("/classes", (req, res) => {
  const classVar = req.body;
  const addingUser = addClass(classVar);
  console.log(addingUser);
  res.send(addingUser);
});

// editing and updating a classVar
classesRouter.patch("/classes/:classVarId", (req, res) => {
  const { classVarId } = req.params;
  const body = req.body;
  const classVar = editAndUpdateClass(parseInt(classVarId), body);
  res.send(classVar);
});

// delete classVar by id
classesRouter.delete("/classes/:classVarId", (req, res) => {
  const { classVarId } = req.params;
  console.log(classVarId);
  const classVar = deleteClass(classVarId);
  console.log(classVar);
  res.send(classVar);
});

module.exports = classesRouter;

const express = require("express");
const fs = require("fs");
const path = require("path");
const uniqid = require("uniqid");

const router = express.Router();

router.get("/", (req, res) => {
  const studentsFilePath = path.join(__dirname, "students.json");
  const fileAsABuffer = fs.readFileSync(studentsFilePath);
  const fileAsAString = fileAsABuffer.toString();
  const studentsArray = JSON.parse(fileAsAString);
  res.send(studentsArray);
});

router.get("/:id", (req, res) => {
  const studentsFilePath = path.join(__dirname, "students.json");
  const fileAsABuffer = fs.readFileSync(studentsFilePath);
  const fileAsAString = fileAsABuffer.toString();
  const studentsArray = JSON.parse(fileAsAString);
  const idComingFromRequest = req.params.identifier;

  const student = studentsArray.filter(
    (student) => student.id === idComingFromRequest
  );
  res.send(student);
});

// 3. router.post("/")

router.post("/", (req, res) => {
  const studentsFilePath = path.join(__dirname, "students.json");
  const fileAsABuffer = fs.readFileSync(studentsFilePath);
  const fileAsAString = fileAsABuffer.toString();
  const studentsArray = JSON.parse(fileAsAString);
  const newStudent = req.body;
  newStudent.id = uniqid();
  studentsArray.map((student) => {
    if (student.email === newStudent.email) {
      console.log("we cannot process this");
    } else {
      studentsArray.push(newStudent);
    }
  });

  fs.writeFileSync(studentsFilePath, JSON.stringify(studentsArray));

  res.status(201).send({ id: newStudent.id });
  console.log(newStudent);
  console.log(studentsArray);
});

// 4. router.put("/:id")

router.put("/:id", (req, res) => {
  const studentsFilePath = path.join(__dirname, "students.json");
  const fileAsABuffer = fs.readFileSync(studentsFilePath);
  const fileAsAString = fileAsABuffer.toString();
  const studentsArray = JSON.parse(fileAsAString);
  const newStudentsArray = studentsArray.filter(
    (user) => user.ID !== req.params.id
  );

  const modifiedStudent = req.body;
  modifiedStudent.id = req.params.id;
  newStudentsArray.push(modifiedStudent);

  fs.writeFileSync(usersFilePath, JSON.stringify(newStudentsArray));
  res.send("Modify Student route");
});

// 5. router.delete("/:id")

router.delete("/:id", (req, res) => {
  const studentsFilePath = path.join(__dirname, "students.json");
  const fileAsABuffer = fs.readFileSync(studentsFilePath);
  const fileAsAString = fileAsABuffer.toString();
  const studentsArray = JSON.parse(fileAsAString);
  const newStudentsArray = studentsArray.filter(
    (student) => student.id !== req.params.id
  );

  fs.writeFileSync(studentsFilePath, JSON.stringify(newStudentsArray));

  res.status(204).send();
});

module.exports = router;

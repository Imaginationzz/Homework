const express = require("express");
const fs = require("fs-extra");
const path = require("path");
const uniqid = require("uniqid");
const { readDB, writeDB } = require("../lib/readWrite");

const { check, validationResult } = require("express-validator");

const router = express.Router();
const projectsFilePath = path.join(__dirname, "projects.json");

router.get("/:id", async (req, res, next) => {
  try {
    const projectsDB = await readDB(projectsFilePath);
    const project = projectsDB.filter(
      (project) => project.ID === req.params.id
    );
    if (project.length > 0) {
      res.send(project);
    } else {
      const err = new Error();
      err.httpStatusCode = 404;
      next(err);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const projectsDB = await readDB(projectsFilePath);
    if (req.query && req.query.name) {
      const filteredProjects = projectsDB.filter(
        (project) =>
          project.hasOwnProperty("name") &&
          project.name.toLowerCase() === req.query.name.toLowerCase()
      );
      res.send(filteredProjects);
    } else {
      res.send(projectsDB);
    }
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  [
    check("name")
      .isLength({ min: 4 })
      .withMessage("short name")
      .exists()
      .withMessage("Insert a name please!"),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const err = new Error();
        err.message = errors;
        err.httpStatusCode = 400;
        next(err);
      } else {
        const projectsDB = await readDB(projectsFilePath);
        const newProject = {
          ...req.body,
          ID: uniqid(),
          modifiedAt: new Date(),
        };

        projectsDB.push(newProject);

        await writeDB(projectsFilePath, projectsDB);

        res.status(201).send({ id: newProject.ID });
      }
    } catch (error) {
      next(error);
    }
  }
);

router.delete("/:id", async (req, res, next) => {
  try {
    const projectsDB = readDB(projectsFilePath);
    const newDb = projectsDB.filter((user) => user.ID !== req.params.id);
    await writeDB(projectsFilePath, newDb);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const projectsDB = readFile("projects.json");
    const newDb = projectsDB.filter((project) => project.ID !== req.params.id);

    const modifiedProject = {
      ...req.body,
      ID: req.params.id,
      modifiedAt: new Date(),
    };

    newDb.push(modifiedProject);
    await writeDB(projectsFilePath, newDb);

    res.send({ id: modifiedProject.ID });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

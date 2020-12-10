const express = require("express");
const router = express.Router();
const multer = require("multer");
const { writeFile } = require("fs-extra");
const { join } = require("path");

const uploadMiddleware = multer({});
const studentsImgPath = join(__dirname, "../../public/img/students");
const projectsImgPath = join(__dirname, "../../public/img/projects");

router.post(
  "/uploadStudentPicture",
  uploadMiddleware.single("avatar"),
  async (req, res, next) => {
    try {
      await writeFile(
        join(studentsImgPath, req.file.originalname),
        req.file.buffer
      );
      res.send("file sucessfully uploaded");
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  "/uploadProjectPicture",
  uploadMiddleware.single("avatar"),
  async (req, res, next) => {
    try {
      await writeFile(
        join(projectsImgPath, req.file.originalname),
        req.file.buffer
      );
      res.send("file sucessfully uploaded");
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

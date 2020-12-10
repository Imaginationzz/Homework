const express = require("express");
const path = require("path");
const uniqid = require("uniqid");
const { readDB, writeDB } = require("../lib/readWrite");

const { check, validationResult } = require("express-validator");

const router = express.Router();
const reviewsFilePath = path.join(__dirname, "reviews.json");

router.get("/:id", async (req, res, next) => {
  try {
    const reviewsDB = await readDB(reviewsFilePath);
    const review = reviewsDB.filter((review) => review.ID === req.params.id);
    if (review.length > 0) {
      res.send(review);
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
    const reviewsDB = await readDB(reviewsFilePath);
    if (req.query && req.query.name) {
      const filteredReviews = reviewsDB.filter(
        (review) =>
          review.hasOwnProperty("name") &&
          review.name.toLowerCase() === req.query.name.toLowerCase()
      );
      res.send(filteredReviews);
    } else {
      res.send(reviewsDB);
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
        const reviewsDB = await readDB(reviewsFilePath);
        const newreview = {
          ...req.body,
          ID: uniqid(),
          modifiedAt: new Date(),
        };

        reviewsDB.push(newreview);

        await writeDB(reviewsFilePath, reviewsDB);

        res.status(201).send({ id: newreview.ID });
      }
    } catch (error) {
      next(error);
    }
  }
);

router.delete("/:id", async (req, res, next) => {
  try {
    const reviewsDB = readDB(reviewsFilePath);
    const newDb = reviewsDB.filter((user) => user.ID !== req.params.id);
    await writeDB(reviewsFilePath, newDb);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const reviewsDB = readFile("reviews.json");
    const newDb = reviewsDB.filter((review) => review.ID !== req.params.id);

    const modifiedReview = {
      ...req.body,
      ID: req.params.id,
      modifiedAt: new Date(),
    };

    newDb.push(modifiedReview);
    await writeDB(reviewsFilePath, newDb);

    res.send({ id: modifiedReview.ID });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

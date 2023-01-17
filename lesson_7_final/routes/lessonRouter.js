const express = require("express");
const lessonController = require("../controllers/lessonController");
const router = express.Router();
const authMiddleware = require("./../midlewares/authMiddleware.js");

router.get("/", lessonController.getAll);
router.get("/:id", lessonController.getOne);
router.post("/", authMiddleware, lessonController.create);
router.delete("/:id");
router.patch("/:id");

module.exports = router;

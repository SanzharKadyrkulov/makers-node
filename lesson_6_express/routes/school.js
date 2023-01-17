const express = require("express");

const router = express.Router();
const SchoolController = require("./../controllers/schoolController.js");

router.get("/", SchoolController.getAll);
router.get("/:id", SchoolController.getOne);
router.post("/", SchoolController.create);
router.delete("/:id", SchoolController.delete);
router.patch("/:id", SchoolController.update);

module.exports = router;

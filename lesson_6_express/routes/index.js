const express = require("express");

const router = express.Router();

const studentsRoutes = require("./students.js");
const schoolRoutes = require("./../routes/school.js");
router.use("/students", studentsRoutes);
router.use("/schools", schoolRoutes);
module.exports = router;

const express = require("express");
const router = express.Router();

const authMiddleware = require("./../midlewares/authMiddleware.js");

const lessonRoutes = require("./lessonRouter.js");
const profileRoutes = require("./profileRoutes.js");
const schoolRoutes = require("./schoolRoutes.js");
const taskRoutes = require("./taskRoutes.js");
const userRoutes = require("./userRoutes.js");
const authRoutes = require("./authRoutes.js");

router.use("/task", taskRoutes);
router.use("/user", authMiddleware, userRoutes);
router.use("/profile", profileRoutes);
router.use("/", authRoutes);
router.use("/lesson", lessonRoutes);
router.use("/school", schoolRoutes);

module.exports = router;

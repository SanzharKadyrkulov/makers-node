const express = require("express");

const router = express.Router();
const StudentController = require("./../controllers/studentController.js");
const { body } = require("express-validator");
const authMidleware = require("../midlewares/authMidleware.js");

router.get("/", StudentController.getAll);
router.get("/:id", authMidleware, StudentController.getOne);
router.delete("/:id", StudentController.delete);
router.patch("/:id", StudentController.update);
router.post(
  "/signup",
  body("email").isEmail(),
  body("password").isLength({ min: 5, max: 20 }),
  StudentController.signup
);
router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 5, max: 20 }),
  StudentController.login
);

module.exports = router;

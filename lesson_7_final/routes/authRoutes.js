const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const Usercontroller = require("../controllers/userController");

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 25 }),
  Usercontroller.registration
);
router.post("/login", Usercontroller.login);
router.get("/activate/:link", Usercontroller.activate);
router.get("/refresh", Usercontroller.refresh);

module.exports = router;

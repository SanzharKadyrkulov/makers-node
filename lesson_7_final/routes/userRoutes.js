const express = require("express");
const Usercontroller = require("../controllers/userController");
const checkRoleMiddleware = require("../midlewares/checkRoleMiddleware");
const router = express.Router();

router.get("/", Usercontroller.getAll);
router.get("/:id", Usercontroller.getOne);
router.patch("/:id", Usercontroller.update);

module.exports = router;

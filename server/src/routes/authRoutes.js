// create a new router instance
const router = require("express").Router();
const authController = require("../controllers/authController");

// define the routes for registration, login, and logout
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

module.exports = router;
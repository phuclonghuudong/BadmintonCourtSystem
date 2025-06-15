const express = require("express");
const router = express.Router();
const authController = require("../controllers/Auth.controller");
const auth = require("../middlewares/verifyToken");

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/logout", auth, authController.logoutUser);
router.get("/details", auth, authController.getDetailUser);

module.exports = router;

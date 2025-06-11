const express = require("express");
const router = express.Router();
const khachHangController = require("../controllers/KhachHang.controller");

router.get("/", khachHangController.getUsers);
router.post("/", khachHangController.addUser);

module.exports = router;

const express = require("express");
const router = express.Router();
const khachHangController = require("../controllers/KhachHang.controller");

router.get("/all", khachHangController.getAllUsers);
router.get("/detail/:MaKhachHang", khachHangController.getUserById);
router.post("/create", khachHangController.addUser);
router.put("/update/:MaKhachHang", khachHangController.updateUsers);
router.put("/delete/:MaKhachHang", khachHangController.deleteUsers);

module.exports = router;

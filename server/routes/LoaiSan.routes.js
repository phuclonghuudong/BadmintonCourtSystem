const express = require("express");
const router = express.Router();
const loaiSanController = require("../controllers/LoaiSan.controller");

router.get("/all", loaiSanController.getAllLoaiSan);
router.get("/detail/:MaLoaiSan", loaiSanController.getLoaiSanById);
router.post("/create", loaiSanController.addLoaiSan);
router.put("/update/:MaLoaiSan", loaiSanController.updateLoaiSan);
router.put("/delete/:MaLoaiSan", loaiSanController.deleteLoaiSan);

module.exports = router;

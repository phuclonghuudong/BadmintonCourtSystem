const express = require("express");
const router = express.Router();
const loaiSanPhamController = require("../controllers/LoaiSanPham.controller");

router.get("/all", loaiSanPhamController.getAllLoaiSanPham);
router.get("/detail/:MaLoaiSanPham", loaiSanPhamController.getLoaiSanPhamById);
router.post("/create", loaiSanPhamController.addLoaiSanPham);
router.put("/update/:MaLoaiSanPham", loaiSanPhamController.updateLoaiSanPham);
router.put("/delete/:MaLoaiSanPham", loaiSanPhamController.deleteLoaiSanPham);

module.exports = router;

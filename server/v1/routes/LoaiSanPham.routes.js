const express = require("express");
const router = express.Router();
const loaiSanPhamController = require("../controllers/LoaiSanPham.controller");
const auth = require("../middlewares/verifyToken");
const authorizeRole = require("../middlewares/authorizeRole");

router.get(
  "/all",
  auth("access"),
  authorizeRole(["ADMIN", "NHANVIEN"]),
  loaiSanPhamController.getAllLoaiSanPham
);
router.get(
  "/detail/:MaLoaiSanPham",
  auth("access"),
  authorizeRole(["ADMIN", "NHANVIEN"]),
  loaiSanPhamController.getLoaiSanPhamById
);
router.post(
  "/create",
  auth("access"),
  authorizeRole(["ADMIN"]),
  loaiSanPhamController.addLoaiSanPham
);
router.put(
  "/update/:MaLoaiSanPham",
  auth("access"),
  authorizeRole(["ADMIN"]),
  loaiSanPhamController.updateLoaiSanPham
);
router.put(
  "/delete/:MaLoaiSanPham",
  auth("access"),
  authorizeRole(["ADMIN"]),
  loaiSanPhamController.deleteLoaiSanPham
);

module.exports = router;

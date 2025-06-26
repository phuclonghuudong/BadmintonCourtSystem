const express = require("express");
const router = express.Router();
const loaiSanController = require("../controllers/LoaiSan.controller");
const auth = require("../middlewares/verifyToken");
const authorizeRole = require("../middlewares/authorizeRole");

router.get(
  "/all",
  auth("access"),
  authorizeRole(["ADMIN", "NHANVIEN"]),
  loaiSanController.getAllLoaiSan
);
router.get(
  "/detail/:MaLoaiSan",
  auth("access"),
  authorizeRole(["ADMIN", "NHANVIEN"]),
  loaiSanController.getLoaiSanById
);
router.post(
  "/create",
  auth("access"),
  authorizeRole(["ADMIN"]),
  loaiSanController.addLoaiSan
);
router.put(
  "/update/:MaLoaiSan",
  auth("access"),
  authorizeRole(["ADMIN"]),
  loaiSanController.updateLoaiSan
);
router.put(
  "/delete/:MaLoaiSan",
  auth("access"),
  authorizeRole("ADMIN"),
  loaiSanController.deleteLoaiSan
);

module.exports = router;

const express = require("express");
const router = express.Router();

const khachHangRoutes = require("./KhachHang.routes");
const nhomQuyenRoutes = require("./NhomQuyen.routes");
const loaiSanPhamRoutes = require("./LoaiSanPham.routes");
const loaiSanRoutes = require("./LoaiSan.routes");
const authRoutes = require("./Auth.routes");
const DanhMucChucNangRoutes = require("./DanhMucChucNang.routes");

router.use("/khach-hang", khachHangRoutes);
router.use("/nhom-quyen", nhomQuyenRoutes);
router.use("/loai-san-pham", loaiSanPhamRoutes);
router.use("/loai-san", loaiSanRoutes);
router.use("/account", authRoutes);
router.use("/danh-muc-chuc-nang", DanhMucChucNangRoutes);

module.exports = router;

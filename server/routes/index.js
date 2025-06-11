const express = require("express");
const router = express.Router();

const khachHangRoutes = require("./KhachHang.routes");
const nhomQuyenRoutes = require("./NhomQuyen.routes");
const loaiSanPhamRoutes = require("./LoaiSanPham.routes");
const loaiSanRoutes = require("./LoaiSan.routes");

router.use("/khach-hang", khachHangRoutes);
router.use("/nhom-quyen", nhomQuyenRoutes);
router.use("/loai-san-pham", loaiSanPhamRoutes);
router.use("/loai-san", loaiSanRoutes);

module.exports = router;

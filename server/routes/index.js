const express = require("express");
const router = express.Router();
const nhomQuyenRoutes = require("./NhomQuyen.routes");
const loaiSanRoutes = require("./LoaiSan.routes");
const sanRoutes = require("./San.routes");
const sanPhamRoutes = require("./SanPham.routes");
const loaiSanPhamRoutes = require("./LoaiSanPham.routes");
const chucNangRoutes = require("./DanhMucChucNang.routes");
const ROUTER_LINK = require("../constants/routerLink");

const BASE_PATH = `${ROUTER_LINK.API}${ROUTER_LINK.VERSION}`;

router.use(`${BASE_PATH}${ROUTER_LINK.LOAI_SAN.BASE}`, loaiSanRoutes);
router.use(`${BASE_PATH}${ROUTER_LINK.LOAI_SAN_PHAM.BASE}`, loaiSanPhamRoutes);
router.use(`${BASE_PATH}${ROUTER_LINK.NHOM_QUYEN.BASE}`, nhomQuyenRoutes);
router.use(`${BASE_PATH}${ROUTER_LINK.CHUC_NANG.BASE}`, chucNangRoutes);
router.use(`${BASE_PATH}${ROUTER_LINK.SAN.BASE}`, sanRoutes);
router.use(`${BASE_PATH}${ROUTER_LINK.SAN_PHAM.BASE}`, sanPhamRoutes);

module.exports = router;

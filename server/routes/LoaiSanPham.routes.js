const express = require("express");
const router = express.Router();
const {
  getAllLoaiSanPham,
  getLoaiSanPhamById,
  createLoaiSanPham,
  updateLoaiSanPham,
  deleteLoaiSanPham,
} = require("../controllers/LoaiSanPham.controller");
const ROUTES = require("../constants/routerLink");

const PATH = ROUTES.LOAI_SAN_PHAM;

router.get(`${PATH.LIST}`, getAllLoaiSanPham);
router.get(`${PATH.DETAIL}`, getLoaiSanPhamById);
router.post(`${PATH.CREATE}`, createLoaiSanPham);
router.put(`${PATH.UPDATE}`, updateLoaiSanPham);
router.put(`${PATH.DELETE}`, deleteLoaiSanPham);

module.exports = router;

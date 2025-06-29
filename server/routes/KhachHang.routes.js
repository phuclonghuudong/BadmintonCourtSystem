const express = require("express");
const router = express.Router();
const {
  getAllKhachHang,
  getAllKhachHangActive,
  getKhachHangById,
  createKhachHang,
  updateKhachHang,
  deleteKhachHang,
} = require("../controllers/KhachHang.controller");
const ROUTES = require("../constants/routerLink");

const PATH = ROUTES.KHACH_HANG;

router.get(`${PATH.LIST}`, getAllKhachHang);
router.get(`${PATH.DETAIL}`, getKhachHangById);
router.post(`${PATH.CREATE}`, createKhachHang);
router.put(`${PATH.UPDATE}`, updateKhachHang);
router.put(`${PATH.DELETE}`, deleteKhachHang);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getAllTaiKhoan,
  getAllTaiKhoanActive,
  getTaiKhoanById,
  createTaiKhoan,
} = require("../controllers/TaiKhoan.controller");
const ROUTES = require("../constants/routerLink");

const PATH = ROUTES.TAI_KHOAN;

router.get(`${PATH.LIST}`, getAllTaiKhoan);
router.get(`${PATH.DETAIL}`, getTaiKhoanById);
router.post(`${PATH.CREATE}`, createTaiKhoan);
// router.put(`${PATH.UPDATE}`, updateNhanVien);
// router.put(`${PATH.DELETE}`, deleteNhanVien);

module.exports = router;

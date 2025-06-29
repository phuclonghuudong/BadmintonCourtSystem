const express = require("express");
const router = express.Router();
const {
  getAllNhanVien,
  getAllNhanVienActive,
  getNhanVienById,
  createNhanVien,
  deleteNhanVien,
  updateNhanVien,
} = require("../controllers/NhanVien.controller");
const ROUTES = require("../constants/routerLink");

const PATH = ROUTES.NHAN_VIEN;

router.get(`${PATH.LIST}`, getAllNhanVien);
router.get(`${PATH.DETAIL}`, getNhanVienById);
router.post(`${PATH.CREATE}`, createNhanVien);
router.put(`${PATH.UPDATE}`, updateNhanVien);
router.put(`${PATH.DELETE}`, deleteNhanVien);

module.exports = router;

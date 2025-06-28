const express = require("express");
const router = express.Router();
const {
  getAllSanPham,
  getSanPhamById,
  createSanPham,
  updateSanPham,
  deleteSanPham,
} = require("../controllers/SanPham.controller");
const ROUTES = require("../constants/routerLink");

const PATH = ROUTES.SAN_PHAM;

router.get(`${PATH.LIST}`, getAllSanPham);
router.get(`${PATH.DETAIL}`, getSanPhamById);
router.post(`${PATH.CREATE}`, createSanPham);
router.put(`${PATH.UPDATE}`, updateSanPham);
router.put(`${PATH.DELETE}`, deleteSanPham);

module.exports = router;

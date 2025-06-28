const express = require("express");
const router = express.Router();
const {
  getAllLoaiSan,
  getLoaiSanById,
  createLoaiSan,
  updateLoaiSan,
  deleteLoaiSan,
} = require("../controllers/LoaiSan.controller");
const ROUTES = require("../constants/routerLink");

const PATH = ROUTES.LOAI_SAN;

router.get(`${PATH.LIST}`, getAllLoaiSan);
router.get(`${PATH.DETAIL}`, getLoaiSanById);
router.post(`${PATH.CREATE}`, createLoaiSan);
router.put(`${PATH.UPDATE}`, updateLoaiSan);
router.put(`${PATH.DELETE}`, deleteLoaiSan);

module.exports = router;

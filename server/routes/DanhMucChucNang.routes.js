const express = require("express");
const router = express.Router();
const {
  getAllList,
  getById,
  createDanhMucChucNang,
  updateDanhMucChucNang,
  deleteDanhMucChucNang,
} = require("../controllers/DanhMucChucNang.controller");
const ROUTES = require("../constants/routerLink");

const PATH = ROUTES.CHUC_NANG;

router.get(`${PATH.LIST}`, getAllList);
router.get(`${PATH.DETAIL}`, getById);
router.post(`${PATH.CREATE}`, createDanhMucChucNang);
router.put(`${PATH.UPDATE}`, updateDanhMucChucNang);
router.put(`${PATH.DELETE}`, deleteDanhMucChucNang);

module.exports = router;

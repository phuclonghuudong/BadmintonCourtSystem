const express = require("express");
const router = express.Router();
const {
  getAllNhomQuyen,
  getNhomQuyenById,
  createNhomQuyen,
  updateNhomQuyen,
  deleteNhomQuyen,
} = require("../controllers/NhomQuyen.controller");
const ROUTES = require("../constants/routerLink");

const PATH = ROUTES.NHOM_QUYEN;

router.get(`${PATH.LIST}`, getAllNhomQuyen);
router.get(`${PATH.DETAIL}`, getNhomQuyenById);
router.post(`${PATH.CREATE}`, createNhomQuyen);
router.put(`${PATH.UPDATE}`, updateNhomQuyen);
router.put(`${PATH.DELETE}`, deleteNhomQuyen);

module.exports = router;

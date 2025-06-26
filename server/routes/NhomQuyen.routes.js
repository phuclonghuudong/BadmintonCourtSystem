const express = require("express");
const router = express.Router();
const NhomQuyenController = require("../controllers/NhomQuyen.controller");
const ROUTES = require("../constants/routerLink");

router.get(`${ROUTES.NHOM_QUYEN.LIST}`, NhomQuyenController.getAllNhomQuyen);
router.post(`${ROUTES.NHOM_QUYEN.CREATE}`, NhomQuyenController.createNhomQuyen);

module.exports = router;

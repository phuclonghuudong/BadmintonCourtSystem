const express = require("express");
const router = express.Router();
const nhomQuyenRoutes = require("./NhomQuyen.routes");
const ROUTER_LINK = require("../constants/routerLink");

const BASE_PATH = `${ROUTER_LINK.API}${ROUTER_LINK.VERSION}`;

router.use(`${BASE_PATH}${ROUTER_LINK.NHOM_QUYEN.BASE}`, nhomQuyenRoutes);

module.exports = router;

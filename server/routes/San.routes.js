const express = require("express");
const router = express.Router();
const {
  getAllSan,
  getSanById,
  createSan,
  updateSan,
  deleteSan,
} = require("../controllers/San.controller");
const ROUTES = require("../constants/routerLink");

const PATH = ROUTES.SAN;

router.get(`${PATH.LIST}`, getAllSan);
router.get(`${PATH.DETAIL}`, getSanById);
router.post(`${PATH.CREATE}`, createSan);
router.put(`${PATH.UPDATE}`, updateSan);
router.put(`${PATH.DELETE}`, deleteSan);

module.exports = router;

const express = require("express");
const router = express.Router();
const DMCNController = require("../controllers/DanhMucChucNang.controller");
const auth = require("../middlewares/verifyToken");
const authorizeRole = require("../middlewares/authorizeRole");

router.get(
  "/all",
  auth("access"),
  authorizeRole("ADMIN"),
  DMCNController.getAllChucNang
);
router.get(
  "/detail/:MaChucNang",
  auth("access"),
  authorizeRole("ADMIN"),
  DMCNController.getChucNangById
);
router.post(
  "/create/",
  auth("access"),
  authorizeRole("ADMIN"),
  DMCNController.createChucNang
);
router.put(
  "/update/:MaChucNang",
  auth("access"),
  authorizeRole("ADMIN"),
  DMCNController.updateChucNang
);
router.put(
  "/delete/:MaChucNang",
  auth("access"),
  authorizeRole("ADMIN"),
  DMCNController.deleteChucNang
);

module.exports = router;

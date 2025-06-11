const express = require("express");
const router = express.Router();
const nhomQuyenController = require("../controllers/NhomQuyen.controller");

router.get("/all", nhomQuyenController.getAllNhomQuyen);
router.post("/create", nhomQuyenController.addNhomQuyen);
router.put("/update/:MaNhomQuyen", nhomQuyenController.updateNhomQuyen);
router.put("/delete/:MaNhomQuyen", nhomQuyenController.deleteNhomQuyen);

module.exports = router;

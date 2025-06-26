const express = require("express");
const router = express.Router();
const UploadImage = require("../controllers/UploadImage.controller");

router.post("/upload", UploadImage.UploadImageController);

module.exports = router;

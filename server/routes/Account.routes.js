const express = require("express");
const router = express.Router();
const { loginAccount } = require("../controllers/Auth.controller");
const ROUTES = require("../constants/routerLink");

const PATH = ROUTES.ACCOUNT;

router.post(`${PATH.LOGIN}`, loginAccount);

module.exports = router;

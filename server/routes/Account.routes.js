const express = require("express");
const router = express.Router();
const {
  loginAccount,
  signupAccount,
} = require("../controllers/Auth.controller");
const ROUTES = require("../constants/routerLink");

const PATH = ROUTES.ACCOUNT;

router.post(`${PATH.LOGIN}`, loginAccount);
router.post(`${PATH.SIGNUP}`, signupAccount);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  loginAccount,
  signupAccount,
  verifyEmail,
  otpVerification,
} = require("../controllers/Auth.controller");
const ROUTES = require("../constants/routerLink");

const PATH = ROUTES.ACCOUNT;

router.post(`${PATH.LOGIN}`, loginAccount);
router.post(`${PATH.SIGNUP}`, signupAccount);
router.post(`${PATH.VERIFY_EMAIL}`, verifyEmail);
router.put(`${PATH.OTP_VERIFICATION}`, otpVerification);

module.exports = router;

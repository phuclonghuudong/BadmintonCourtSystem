const express = require("express");
const router = express.Router();
const {
  loginAccount,
  signupAccount,
  verifyEmail,
  otpVerification,
  resetPassword,
  refreshToken,
} = require("../controllers/Auth.controller");
const ROUTES = require("../constants/routerLink");

const PATH = ROUTES.ACCOUNT;

router.post(`${PATH.LOGIN}`, loginAccount);
router.post(`${PATH.SIGNUP}`, signupAccount);
router.post(`${PATH.VERIFY_EMAIL}`, verifyEmail);
router.put(`${PATH.OTP_VERIFICATION}`, otpVerification);
router.put(`${PATH.RESET_PASSWORD}`, resetPassword);
router.put(`${PATH.REFRESH_TOKEN}`, refreshToken);

module.exports = router;

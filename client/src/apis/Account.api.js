const AccountApi = {
  // Customer
  registerAccount: {
    url: "/account/register",
    method: "post",
  },
  loginAccount: {
    url: "/account/login",
    method: "post",
  },
  logoutAccount: {
    url: "/account/logout",
    method: "post",
  },
  detailsAccount: {
    url: "/account/details",
    method: "get",
  },
  forgotPasswordAccount: {
    url: "/account/forgot-password",
    method: "put",
  },
  verifyForgotPasswordOtpAccount: {
    url: "/account/verify-forgot-password-otp",
    method: "put",
  },
  resetPasswordOtpAccount: {
    url: "/account/reset-password",
    method: "put",
  },
};

export default AccountApi;

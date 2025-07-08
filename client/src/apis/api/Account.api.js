export const baseURl = import.meta.env.VITE_BASE_URL;

const AccountApi = {
  login: {
    url: "/account/login",
    method: "post",
  },
  signup: {
    url: "/account/signup",
    method: "post",
  },
  verify_email: {
    url: "/account/verify-email",
    method: "post",
  },
  otp_verification: {
    url: "/account/verify-otp",
    method: "put",
  },
  reset_password: {
    url: "/account/reset-password",
    method: "put",
  },
  reset_password: {
    url: "/account/reset-password",
    method: "put",
  },
  refresh_token: {
    url: "/account/refresh-token",
    method: "post",
  },
};

export default AccountApi;

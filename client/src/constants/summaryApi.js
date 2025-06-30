export const baseURl = import.meta.env.VITE_BASE_URL;

const summaryApi = {
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
};

export default summaryApi;

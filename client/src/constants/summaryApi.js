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
};

export default summaryApi;

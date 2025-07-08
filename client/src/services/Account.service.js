import { AccountApi } from "../apis/api";
import apiService from "../apis/apiService";

const AccountService = {
  login: (data) => apiService(AccountApi.login, { data }),
  signup: (data) => apiService(AccountApi.signup, { data }),
  verify_email: (data) => apiService(AccountApi.verify_email, { data }),
  otp_verification: (data) => apiService(AccountApi.otp_verification, { data }),
  reset_password: (data) => apiService(AccountApi.reset_password, { data }),
  refresh_token: (data) => apiService(AccountApi.refresh_token, { data }),
};

export default AccountService;

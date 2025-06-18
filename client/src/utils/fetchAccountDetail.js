import AccountApi from "../apis/Account.api";
import apiService from "../services/apiService";
import AxiosToastError from "../services/AxiosToastError";

const fetchAccountDetail = async () => {
  try {
    const response = await apiService(AccountApi.detailsAccount);
    const { data: responseData } = response;
    return responseData;
  } catch (error) {
    AxiosToastError(error);
  }
};

export default fetchAccountDetail;

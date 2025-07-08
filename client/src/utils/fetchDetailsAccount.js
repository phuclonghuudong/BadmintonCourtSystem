import { toast } from "react-toastify";
import apiService from "../apis/apiService";
import summaryApi from "../constants/summaryApi";

const fetchDetailsAccount = async () => {
  try {
    const result = await apiService(summaryApi.getDetailAccount);
    console.log("CHECK USER: ", result);
  } catch (error) {
    toast.error(error?.MESSAGE || error);
  }
};

export default fetchDetailsAccount;

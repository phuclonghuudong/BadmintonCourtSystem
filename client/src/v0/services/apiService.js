import Axios from "./axios";

const apiService = async (apiConfig, options = {}) => {
  const { url, method } = apiConfig;

  try {
    const response = await Axios({
      url,
      method,
      ...options,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default apiService;

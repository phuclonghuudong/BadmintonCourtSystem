import Axios from "./axiosClient";

const apiService = async (apiConfig, options = {}) => {
  const { url, method } = apiConfig;
  const { data, params, headers, ...rest } = options;

  try {
    const response = await Axios({
      url,
      method,
      data,
      params,
      headers,
      ...rest,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default apiService;

// import Axios from "./axiosClient";

// const apiService = async (apiConfig, options = {}) => {
//   const { url, method } = apiConfig;

//   try {
//     const response = await Axios({
//       url,
//       method,
//       ...options,
//     });

//     return response;
//   } catch (error) {
//     throw error;
//   }
// };

// export default apiService;

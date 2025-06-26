const ResponseCode = require("../constants/responseStatus");

const successHandler = (
  res,
  customMessage = null,
  data = null,
  code = "SUCCESS"
) => {
  const response = ResponseCode[code];
  res.status(response.status).json({
    isSuccess: response.isSuccess,
    message: customMessage || response.message,
    data: data,
  });
};

module.exports = successHandler;

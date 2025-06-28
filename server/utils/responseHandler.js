// const ResponseCode = require("../constants/responseStatus");

const responseHandler = (
  res,
  statusCode = 200,
  message = "",
  data = null,
  isError = false
) => {
  return res.status(statusCode).json({
    CODE: `${statusCode}${statusCode}`,
    SUCCESS: !isError,
    ERROR: isError,
    MESSAGE: message,
    DATA: data,
  });
};
const successHandler = (res, statusCode = 200, message, data = null) => {
  return res.status(statusCode).json({
    CODE: `${statusCode + "" + statusCode}`,
    MESSAGE: message,
    ERROR: false,
    SUCCESS: true,
    DATA: data,
  });
};

const errorHandler = (res, statusCode = 500, message, data = null) => {
  return res.status(statusCode).json({
    CODE: `${statusCode + "" + statusCode}`,
    MESSAGE: message,
    ERROR: true,
    SUCCESS: false,
    DATA: data,
  });
};

module.exports = { successHandler, errorHandler, responseHandler };

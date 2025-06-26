module.exports = {
  //   SUCCESS
  SUCCESS: {
    isSuccess: true,
    status: 200,
    message: "Success", //Trả về thành công chung
  },
  CREATE: {
    isSuccess: true,
    status: 201,
    message: "Data create", //Đã tạo dữ liệu mới
  },
  ACCEPTED: {
    isSuccess: true,
    status: 202,
    message: "Accepted", //Yêu cầu đã được chấp nhận, xử lý sau
  },
  NO_CONTENT: {
    isSuccess: true,
    status: 204,
    message: "No Content", //khi xoá hoặc không có dữ liệu trả về
  },
  //   FAIL CLIENT
  BAD_REQUEST: {
    isSuccess: false,
    status: 400,
    message: "Bad Request !", //Dữ liệu gửi lên sai (thiếu, sai định dạng, v.v.)
  },
  UNAUTHORIZED: {
    isSuccess: false,
    status: 401,
    message: "Unauthorized !", //Chưa đăng nhập hoặc token sai
  },
  FORBIDDEN: {
    isSuccess: false,
    status: 403,
    message: "Forbidden !", //Đã đăng nhập nhưng không đủ quyền
  },
  CONFLICT: {
    isSuccess: false,
    status: 409,
    message: "Conflict !", //Dữ liệu bị trùng (email đã tồn tại, username bị lặp,...)
  },
  NOT_FOUND: {
    isSuccess: false,
    status: 404,
    message: "Not Found !", //Không tìm thấy dữ liệu
  },
  UNPROCESSABLE_ENTITY: {
    isSuccess: false,
    status: 422,
    message: "Unprocessable Entity !", //Dữ liệu hợp lệ về định dạng nhưng không xử lý được (validate form sai)
  },
  //   ERROR SERVER
  INTERNAL_SERVER_ERROR: {
    isSuccess: false,
    status: 500,
    message: "Internal Server Error !", //Lỗi không xác định bên trong server
  },
  NOT_IMPLEMENTED: {
    isSuccess: false,
    status: 501,
    message: "Not Implemented !", //Tính năng chưa được hỗ trợ hoặc chưa triển khai
  },
};

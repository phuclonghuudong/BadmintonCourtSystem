const successHandler = (res, message, data = null, statusCode = 200) => {
  return res.status(statusCode).json({
    MESSAGE: message,
    ERROR: false,
    SUCCESS: true,
    DATA: data,
  });
};

module.exports = successHandler;
// 2xx – Thành công (Success)
// 200 OK	Yêu cầu thành công	- GET (lấy dữ liệu)
//                              - PUT (cập nhật)
//                              - DELETE (xóa thành công không cần phản hồi chi tiết)
//
// 201 Created	Đã tạo thành công tài nguyên mới - POST tạo mới (thêm user, product, v.v.)
// 202 Accepted	Yêu cầu được chấp nhận nhưng chưa xử lý xong	- Gửi yêu cầu xử lý bất đồng bộ (queue, job...)
// 204 No Content	Thành công nhưng không trả về nội dung	- Xóa thành công nhưng không cần trả JSON

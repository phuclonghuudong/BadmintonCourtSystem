const errorHandler = (err, req, res, next) => {
  console.error("Lỗi:", err);

  if (err.name === "NotFoundError") {
    return res
      .status(404)
      .json({ ERROR: true, SUCCESS: false, MESSAGE: err.message });
  }

  if (err.name === "PrismaClientKnownRequestError") {
    if (err.code === "P2002") {
      return res.status(409).json({
        ERROR: true,
        SUCCESS: false,
        MESSAGE: `Dữ liệu đã tồn tại: ${err.meta.target.join(", ")}`,
      });
    }
  }

  res.status(500).json({
    ERROR: true,
    SUCCESS: false,
    MESSAGE: `Đã xảy ra lỗi nội bộ: ${err.message}`,
  });
};

module.exports = errorHandler;

// 5xx – Lỗi từ phía server (Server Error)
// 500 Internal Server Error	Lỗi server chung chung	- Bất kỳ lỗi không xác định được
// 501 Not Implemented	Chưa hỗ trợ chức năng đó	    - Gọi vào API chưa lập trình
// 503 Service Unavailable	Server đang bảo trì hoặc quá tải	- Dùng khi hệ thống tạm thời ngưng

// 4xx – Lỗi từ phía client (Client Error)
// 400 Bad Request	Cú pháp yêu cầu sai hoặc thiếu dữ liệu	- Dữ liệu gửi lên thiếu trường bắt buộc, định dạng sai
// 401 Unauthorized	Không có quyền truy cập (chưa đăng nhập)	- Gọi API nhưng chưa kèm token
// 403 Forbidden	Đã xác thực nhưng không đủ quyền	- Có token nhưng không có quyền admin
// 404 Not Found	Không tìm thấy tài nguyên	- Không tồn tại ID, route không đúng
// 409 Conflict	Mâu thuẫn dữ liệu	- Trùng key chính (email, tên đăng nhập), dữ liệu đã tồn tại
// 422 Unprocessable Entity	Dữ liệu hợp lệ về cú pháp nhưng sai logic	- Validate không đạt (email sai định dạng, thiếu trường quan trọng...)

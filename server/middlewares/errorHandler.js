const errorHandler = (err, req, res, next) => {
  console.error("Lỗi:", err);

  if (err.name === "NotFoundError") {
    return res.status(404).json({ SUCCESS: false, MESSAGE: err.message });
  }

  if (err.name === "PrismaClientKnownRequestError") {
    if (err.code === "P2002") {
      return res.status(409).json({
        SUCCESS: false,
        MESSAGE: `Dữ liệu đã tồn tại: ${err.meta.target.join(", ")}`,
      });
    }
  }

  res.status(500).json({
    SUCCESS: false,
    MESSAGE: `Đã xảy ra lỗi nội bộ: ${err.message}`,
    ERROR: true,
  });
};

module.exports = errorHandler;

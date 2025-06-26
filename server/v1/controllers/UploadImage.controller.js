const successHandler = require("../utils/successHandler");
const UploadImage = require("../utils/uploadImageCloudinary");

const UploadImageController = async (req, res, next) => {
  try {
    const file = req.file;

    const upload = await UploadImage(file);

    return successHandler(res, "THÊM HÌNH ẢNH THÀNH CÔNG", { upload }, 201);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  UploadImageController,
};

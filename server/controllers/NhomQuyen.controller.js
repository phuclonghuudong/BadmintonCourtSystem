const NhomQuyenService = require("../services/NhomQuyen.service");
const { BAD_REQUEST } = require("../constants/responseStatus");
const successHandler = require("../utils/succeesHandler");

const getAllNhomQuyen = async (req, res, next) => {
  try {
    const result = await NhomQuyenService.getAllNhomQuyen();

    successHandler(res, "DANH SÁCH TẤT CẢ NHÓM QUYỀN", result, "SUCCESS");
  } catch (error) {
    next(error);
  }
};

const createNhomQuyen = async (req, res, next) => {
  const { TenNhomQuyen, TrangThai, MoTa } = req.body;
  try {
    if (!TenNhomQuyen || TenNhomQuyen.trim() === "") {
      return res.status(BAD_REQUEST.status).json({
        isSuccess: BAD_REQUEST.isSuccess,
        message: "Tên nhóm quyền không được để trống!",
      });
    }

    const result = await NhomQuyenService.createNhomQuyen({
      TenNhomQuyen,
      MoTa,
      TrangThai,
    });

    successHandler(res, "THÊM MỚI NHÓM QUYỀN THÀNH CÔNG!", result, "CREATE");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllNhomQuyen,
  createNhomQuyen,
};

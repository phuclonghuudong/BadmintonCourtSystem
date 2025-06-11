const NhomQuyenService = require("../services/NhomQuyen.service");

const getAllNhomQuyen = async (req, res, next) => {
  try {
    const result = await NhomQuyenService.getAllNhomQuyen();
    res.json({
      MESSAGE: "DANH SÁCH TẤT CẢ NHÓM QUYỀM",
      ERROR: true,
      SUCCESS: false,
      DATA: result,
    });
  } catch (error) {
    next(error);
  }
};

const addNhomQuyen = async (req, res, next) => {
  const { TenNhomQuyen, TrangThai } = req.body;
  try {
    const result = await NhomQuyenService.createNhomQuyen({
      TenNhomQuyen,
      TrangThai,
    });
    res.status(201).json({
      MESSAGE: "THÊM MỚI NHÓM QUYỀN THÀNH CÔNG!",
      ERROR: true,
      SUCCESS: false,
      DATA: result,
    });
  } catch (error) {
    next(error);
  }
};
const updateNhomQuyen = async (req, res, next) => {
  const { MaNhomQuyen } = req.params;
  const { TenNhomQuyen, TrangThai } = req.body;

  try {
    const result = await NhomQuyenService.updateNhomQuyen(MaNhomQuyen, {
      TenNhomQuyen,
      TrangThai,
    });

    res.json({
      MESSAGE: "CẬP NHẬT NHÓM QUYỀN THÀNH CÔNG!",
      ERROR: false,
      SUCCESS: true,
      DATA: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteNhomQuyen = async (req, res, next) => {
  const { MaNhomQuyen } = req.params;

  try {
    const result = await NhomQuyenService.deleteNhomQuyenXoa(MaNhomQuyen);

    res.json({
      MESSAGE: "XÓA NHÓM QUYỀN THÀNH CÔNG!",
      ERROR: false,
      SUCCESS: true,
      DATA: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllNhomQuyen,
  addNhomQuyen,
  updateNhomQuyen,
  deleteNhomQuyen,
};

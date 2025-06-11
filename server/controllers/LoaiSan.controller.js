const LoaiSanService = require("../services/LoaiSan.service");
const successHandler = require("../utils/successHandler");

const getAllLoaiSan = async (req, res, next) => {
  try {
    const result = await LoaiSanService.getAllLoaiSan();

    successHandler(res, "DANH SÁCH TẤT CẢ LOẠI SÂN", result);
  } catch (error) {
    next(error);
  }
};

const getLoaiSanById = async (req, res, next) => {
  const { MaLoaiSan } = req.params;

  try {
    const result = await LoaiSanService.getLoaiSanById(MaLoaiSan);

    successHandler(res, "THÔNG TIN LOẠI SÂN!", result);
  } catch (error) {
    next(error);
  }
};

const addLoaiSan = async (req, res, next) => {
  const { TenLoaiSan, MoTa, TrangThai } = req.body;
  try {
    const result = await LoaiSanService.createLoaiSan({
      TenLoaiSan,
      MoTa,
      TrangThai,
    });

    successHandler(res, "THÊM MỚI LOẠI SÂN THÀNH CÔNG!", result, 201);
  } catch (error) {
    next(error);
  }
};

const updateLoaiSan = async (req, res, next) => {
  const { MaLoaiSan } = req.params;
  const { TenLoaiSan, MoTa, TrangThai } = req.body;

  try {
    const result = await LoaiSanService.updateLoaiSan(MaLoaiSan, {
      TenLoaiSan,
      MoTa,
      TrangThai,
    });

    successHandler(res, "CẬP NHẬT LOẠI SÂN THÀNH CÔNG!", result);
  } catch (error) {
    next(error);
  }
};

const deleteLoaiSan = async (req, res, next) => {
  const { MaLoaiSan } = req.params;

  try {
    const result = await LoaiSanService.deleteLoaiSanXoa(MaLoaiSan);

    successHandler(res, "XÓA LOẠI SÂN THÀNH CÔNG!", result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllLoaiSan,
  getLoaiSanById,
  addLoaiSan,
  updateLoaiSan,
  deleteLoaiSan,
};

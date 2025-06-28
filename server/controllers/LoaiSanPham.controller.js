const LoaiSanPhamService = require("../services/LoaiSanPham.service");
const { responseHandler } = require("../utils/responseHandler");

const getAllLoaiSanPham = async (req, res, next) => {
  try {
    const result = await LoaiSanPhamService.getAllList();
    if (!result)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    responseHandler(res, 200, "DANH SÁCH TẤT CẢ LOẠI SẢN PHẨM", result);
  } catch (error) {
    next(error);
  }
};

const getLoaiSanPhamById = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA!", null, true);

    const result = await LoaiSanPhamService.findById(id);
    if (!result)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    responseHandler(res, 200, "CHI TIẾT LOẠI SẢN PHẨM", result);
  } catch (error) {
    next(error);
  }
};

const createLoaiSanPham = async (req, res, next) => {
  let { tenLoaiSanPham, trangThai, moTa } = req.body;

  tenLoaiSanPham = tenLoaiSanPham?.trim();
  try {
    if (!tenLoaiSanPham) {
      return responseHandler(
        res,
        400,
        "Vui lòng nhập đầy đủ thông tin!",
        null,
        true
      );
    }

    const result = await LoaiSanPhamService.createLoaiSanPham({
      tenLoaiSanPham,
      trangThai,
      moTa,
    });

    responseHandler(res, 200, "THÊM MỚI LOẠI SẢN PHẨM THÀNH CÔNG!", result);
  } catch (error) {
    next(error);
  }
};

const updateLoaiSanPham = async (req, res, next) => {
  let { tenLoaiSanPham, trangThai, moTa } = req.body;
  const { id } = req.params;

  tenLoaiSanPham = tenLoaiSanPham?.trim();
  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA!", null, true);

    if (!tenLoaiSanPham)
      return responseHandler(
        res,
        400,
        "VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN",
        null,
        true
      );

    const findById = await LoaiSanPhamService.findById(id);
    if (!findById)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    const result = await LoaiSanPhamService.updateLoaiSanPham(id, {
      tenLoaiSanPham,
      trangThai,
      moTa,
    });
    responseHandler(res, 200, "CẬP NHẬT THÀNH CÔNG.", result);
  } catch (error) {
    next(error);
  }
};

const deleteLoaiSanPham = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA!", null, true);

    const findById = await LoaiSanPhamService.findById(id);
    if (!findById)
      return responseHandler(res, 403, "KHÔNG TÌM THẤY DATA!", null, true);

    const result = await LoaiSanPhamService.deleteLoaiSanPham(id);
    responseHandler(res, 200, "XÓA THÀNH CÔNG.", result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllLoaiSanPham,
  getLoaiSanPhamById,
  createLoaiSanPham,
  updateLoaiSanPham,
  deleteLoaiSanPham,
};

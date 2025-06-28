const LoaiSanPhamService = require("../services/LoaiSanPham.service");
const SanPhamService = require("../services/SanPham.service");
const { responseHandler } = require("../utils/responseHandler");
const validatePrice = require("../utils/validatePrice");

const getAllSanPham = async (req, res, next) => {
  try {
    const result = await SanPhamService.getAllSanPham();
    if (!result)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    responseHandler(res, 200, "DANH SÁCH TẤT CẢ SẢN PHẨM", result);
  } catch (error) {
    next(error);
  }
};

const getAllSanPhamActive = async (req, res, next) => {
  try {
    const result = await SanPhamService.getAllSanPhamActive();
    if (!result)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    responseHandler(res, 200, "DANH SÁCH TẤT CẢ SẢN PHẨM", result);
  } catch (error) {
    next(error);
  }
};

const getSanPhamById = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA!", null, true);

    const result = await SanPhamService.findSanPhamById(id);
    if (!result)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    responseHandler(res, 200, "CHI TIẾT SẢN PHẨM", result);
  } catch (error) {
    next(error);
  }
};

const createSanPham = async (req, res, next) => {
  let {
    loaiSanPhamId,
    tenSanPham,
    giaSanPham,
    donViTinh,
    soLuong,
    moTa,
    hinhAnh,
    trangThai,
  } = req.body;

  tenSanPham = tenSanPham?.trim();
  try {
    if (
      !tenSanPham ||
      !giaSanPham ||
      !loaiSanPhamId ||
      !donViTinh ||
      !soLuong
    ) {
      return responseHandler(
        res,
        400,
        "Vui lòng nhập đầy đủ thông tin!",
        null,
        true
      );
    }

    const checkQuantity = await validatePrice(soLuong);
    if (!checkQuantity.valid)
      return responseHandler(res, 400, checkQuantity.message, null, true);
    soLuong = checkQuantity.number;

    const checkPrice = await validatePrice(giaSanPham);
    if (!checkPrice.valid)
      return responseHandler(res, 400, checkPrice.message, null, true);
    giaSanPham = checkPrice.number;

    const checkLoaiSanPham = await LoaiSanPhamService.findById(loaiSanPhamId);
    if (!checkLoaiSanPham)
      return responseHandler(
        res,
        404,
        "LOẠI SẢN PHẨM KHÔNG TỒN TẠI!",
        null,
        true
      );

    const result = await SanPhamService.createSanPham({
      loaiSanPhamId,
      tenSanPham,
      giaSanPham,
      soLuong,
      donViTinh,
      moTa,
      hinhAnh,
      trangThai,
    });
    responseHandler(res, 200, "THÊM MỚI SẢN PHẨM THÀNH CÔNG!", result);
  } catch (error) {
    next(error);
  }
};

const updateSanPham = async (req, res, next) => {
  let {
    loaiSanPhamId,
    tenSanPham,
    giaSanPham,
    soLuong,
    donViTinh,
    moTa,
    hinhAnh,
    trangThai,
  } = req.body;
  const { id } = req.params;

  tenSanPham = tenSanPham?.trim();
  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA!", null, true);

    const checkSanPham = await SanPhamService.findSanPhamById(id);
    if (!checkSanPham)
      return responseHandler(res, 404, "SẢN PHẨM KHÔNG TỒN TẠI!", null, true);

    if (
      !tenSanPham ||
      !giaSanPham ||
      !loaiSanPhamId ||
      !donViTinh ||
      !soLuong
    ) {
      return responseHandler(
        res,
        400,
        "Vui lòng nhập đầy đủ thông tin!",
        null,
        true
      );
    }

    const checkQuantity = await validatePrice(soLuong);
    if (!checkQuantity.valid)
      return responseHandler(res, 400, checkQuantity.message, null, true);
    soLuong = checkQuantity.number;

    const checkPrice = await validatePrice(giaSanPham);
    if (!checkPrice.valid)
      return responseHandler(res, 400, checkPrice.message, null, true);
    giaSanPham = checkPrice.number;

    const checkLoaiSanPham = await LoaiSanPhamService.findById(loaiSanPhamId);
    if (!checkLoaiSanPham)
      return responseHandler(
        res,
        404,
        "LOẠI SẢN PHẨM KHÔNG TỒN TẠI!",
        null,
        true
      );

    const result = await SanPhamService.updateSanPham(id, {
      loaiSanPhamId,
      tenSanPham,
      giaSanPham,
      soLuong,
      donViTinh,
      moTa,
      hinhAnh,
      trangThai,
    });
    responseHandler(res, 200, "CẬP NHẬT SẢN PHẨM THÀNH CÔNG!", result);
  } catch (error) {
    next(error);
  }
};

const deleteSanPham = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA!", null, true);

    const checkSanPham = await SanPhamService.findSanPhamById(id);
    if (!checkSanPham)
      return responseHandler(res, 404, "SẢN PHẨM KHÔNG TỒN TẠI!", null, true);

    const result = await SanPhamService.deleteSanPham(id);
    responseHandler(res, 200, "XÓA SẢN PHẨM THÀNH CÔNG!", result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllSanPham,
  getAllSanPhamActive,
  getSanPhamById,
  createSanPham,
  updateSanPham,
  deleteSanPham,
};

const LoaiSanService = require("../services/LoaiSan.service");
const SanService = require("../services/San.service");
const { responseHandler } = require("../utils/responseHandler");
const validatePrice = require("../utils/validatePrice");

const getAllSan = async (req, res, next) => {
  try {
    const result = await SanService.getAllSan();
    if (!result)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    responseHandler(res, 200, "DANH SÁCH TẤT CẢ SÂN", result);
  } catch (error) {
    next(error);
  }
};

const getAllSanActive = async (req, res, next) => {
  try {
    const result = await SanService.getAllSanActive();
    if (!result)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    responseHandler(res, 200, "DANH SÁCH TẤT CẢ SÂN", result);
  } catch (error) {
    next(error);
  }
};

const getSanById = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA!", null, true);

    const result = await SanService.findSanById(id);
    if (!result)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    responseHandler(res, 200, "CHI TIẾT SÂN", result);
  } catch (error) {
    next(error);
  }
};

const createSan = async (req, res, next) => {
  let { loaiSanId, tenSan, giaSan, moTa, hinhAnh, trangThai } = req.body;

  tenSan = tenSan?.trim();
  try {
    if (!tenSan || !giaSan || !loaiSanId) {
      return responseHandler(
        res,
        400,
        "Vui lòng nhập đầy đủ thông tin!",
        null,
        true
      );
    }

    const checkPrice = await validatePrice(giaSan);
    if (!checkPrice.valid)
      return responseHandler(res, 400, checkPrice.message, null, true);
    giaSan = checkPrice.number;

    const checkLoaiSan = await LoaiSanService.findById(loaiSanId);
    if (!checkLoaiSan)
      return responseHandler(res, 404, "LOẠI SÂN KHÔNG TỒN TẠI!", null, true);

    const result = await SanService.createSan({
      loaiSanId,
      tenSan,
      giaSan,
      moTa,
      hinhAnh,
      trangThai,
    });
    responseHandler(res, 200, "THÊM MỚI SÂN THÀNH CÔNG!", result);
  } catch (error) {
    next(error);
  }
};

const updateSan = async (req, res, next) => {
  let { loaiSanId, tenSan, giaSan, moTa, hinhAnh, trangThai } = req.body;
  const { id } = req.params;

  tenSan = tenSan?.trim();
  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA!", null, true);

    const findById = await SanService.findSanById(id);
    if (!findById)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    if (!tenSan || !giaSan || !loaiSanId) {
      return responseHandler(
        res,
        400,
        "Vui lòng nhập đầy đủ thông tin!",
        null,
        true
      );
    }

    const checkPrice = await validatePrice(giaSan);
    if (!checkPrice.valid)
      return responseHandler(res, 400, checkPrice.message, null, true);
    giaSan = checkPrice.number;

    const checkLoaiSan = await LoaiSanService.findById(loaiSanId);
    if (!checkLoaiSan)
      return responseHandler(res, 404, "LOẠI SÂN KHÔNG TỒN TẠI!", null, true);

    const result = await SanService.updateSan(id, {
      loaiSanId,
      tenSan,
      giaSan,
      moTa,
      hinhAnh,
      trangThai,
    });
    responseHandler(res, 200, "CẬP NHẬT SÂN THÀNH CÔNG!", result);
  } catch (error) {
    next(error);
  }
};

const deleteSan = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA!", null, true);

    const checkSan = await SanService.findSanById(id);
    if (!checkSan)
      return responseHandler(res, 404, "SÂN KHÔNG TỒN TẠI!", null, true);

    const result = await SanService.deleteSan(id);
    responseHandler(res, 200, "XÓA SÂN THÀNH CÔNG!", result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllSan,
  getAllSanActive,
  getSanById,
  createSan,
  updateSan,
  deleteSan,
};

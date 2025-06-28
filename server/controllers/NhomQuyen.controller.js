const NhomQuyenService = require("../services/NhomQuyen.service");
const { responseHandler } = require("../utils/responseHandler");

const getAllNhomQuyen = async (req, res, next) => {
  try {
    const result = await NhomQuyenService.getAllNhomQuyen();

    responseHandler(res, 200, "DANH SÁCH TẤT CẢ NHÓM QUYỀN", result);
  } catch (error) {
    next(error);
  }
};

const getNhomQuyenById = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA!", null, true);

    const result = await NhomQuyenService.findById(id);
    if (!result)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    responseHandler(res, 200, "CHI TIẾT NHÓM QUYỀN", result);
  } catch (error) {
    next(error);
  }
};

const createNhomQuyen = async (req, res, next) => {
  let { maQuyen, tenQuyen, trangThai, moTa } = req.body;

  maQuyen = maQuyen?.trim();
  tenQuyen = tenQuyen?.trim();
  try {
    if (!maQuyen || !tenQuyen) {
      return responseHandler(
        res,
        400,
        "Vui lòng nhập đầy đủ thông tin!",
        null,
        true
      );
    }

    const findMaQuyen = await NhomQuyenService.findByMaQuyen(maQuyen);
    if (findMaQuyen)
      return responseHandler(res, 409, "MÃ QUYỀN ĐÃ TỒN TẠI!", null, true);

    const result = await NhomQuyenService.createNhomQuyen({
      maQuyen,
      tenQuyen,
      trangThai,
      moTa,
    });

    responseHandler(res, 200, "THÊM MỚI NHÓM QUYỀN THÀNH CÔNG!", result);
  } catch (error) {
    next(error);
  }
};

const updateNhomQuyen = async (req, res, next) => {
  let { maQuyen, tenQuyen, moTa, trangThai } = req.body;
  const { id } = req.params;

  maQuyen = maQuyen?.trim();
  tenQuyen = tenQuyen?.trim();
  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA!", null, true);
    if (!maQuyen || !tenQuyen)
      return responseHandler(
        res,
        400,
        "VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN",
        null,
        true
      );

    const findById = await NhomQuyenService.findById(id);
    if (!findById)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    const findByMaQuyen = await NhomQuyenService.checkExistMaQuyen(maQuyen, id);
    if (findByMaQuyen)
      return responseHandler(res, 409, "MÃ QUYỀN ĐÃ TỒN TẠI!", null, true);

    const result = await NhomQuyenService.updateNhomQuyen(id, {
      maQuyen,
      tenQuyen,
      moTa,
      trangThai,
    });
    responseHandler(res, 200, "CẬP NHẬT THÀNH CÔNG.", result);
  } catch (error) {
    next(error);
  }
};

const deleteNhomQuyen = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA!", null, true);

    const findById = await NhomQuyenService.findById(id);
    if (!findById)
      return responseHandler(res, 403, "KHÔNG TÌM THẤY DATA!", null, true);

    const result = await NhomQuyenService.deleteNhomQuyen(id);
    responseHandler(res, 200, "XÓA THÀNH CÔNG.", result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllNhomQuyen,
  getNhomQuyenById,
  createNhomQuyen,
  updateNhomQuyen,
  deleteNhomQuyen,
};

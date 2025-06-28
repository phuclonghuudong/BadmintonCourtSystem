const DanhMucChucNangService = require("../services/DanhMucChucNang.service");
const { responseHandler } = require("../utils/responseHandler");

const getAllList = async (req, res, next) => {
  try {
    const result = await DanhMucChucNangService.getAllDanhMucChucNang();
    responseHandler(res, 200, "DANH SÁCH TẤT CẢ DANH MỤC CHỨC NĂNG.", result);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA!", null, true);

    const result = await DanhMucChucNangService.findById(id);
    if (!result)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    responseHandler(res, 200, "DANH SÁCH TẤT CẢ DANH MỤC CHỨC NĂNG.", result);
  } catch (error) {
    next(error);
  }
};

const createDanhMucChucNang = async (req, res, next) => {
  let { maChucNang, tenChucNang, moTa, trangThai } = req.body;

  maChucNang = maChucNang?.trim();
  tenChucNang = tenChucNang?.trim();
  try {
    if (!maChucNang || !tenChucNang) {
      return responseHandler(
        res,
        400,
        "VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN!",
        null,
        true
      );
    }

    const findByMaChucNang =
      await DanhMucChucNangService.findByMaChucNang(maChucNang);
    if (findByMaChucNang)
      return responseHandler(res, 409, "MÃ CHỨC NĂNG ĐÃ TỒN TẠI!", null, true);

    const result = await DanhMucChucNangService.createDanhMucChucNang({
      maChucNang,
      tenChucNang,
      moTa,
      trangThai,
    });

    responseHandler(
      res,
      200,
      "THÊM MỚI DANH MỤC CHỨC NĂNG THÀNH CÔNG.",
      result
    );
  } catch (error) {
    next(error);
  }
};

const updateDanhMucChucNang = async (req, res, next) => {
  let { maChucNang, tenChucNang, moTa, trangThai } = req.body;
  const { id } = req.params;

  maChucNang = maChucNang?.trim();
  tenChucNang = tenChucNang?.trim();
  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA!", null, true);

    if (!maChucNang || !tenChucNang) {
      return responseHandler(
        res,
        400,
        "VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN!",
        null,
        true
      );
    }
    const findById = await DanhMucChucNangService.findById(id);
    if (!findById)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    const checkExistMaChucNang =
      await DanhMucChucNangService.checkExistMaChucNang(maChucNang, id);
    if (checkExistMaChucNang)
      return responseHandler(res, 409, "MÃ CHỨC NĂNG ĐÃ TỒN TẠI!", null, true);

    const result = await DanhMucChucNangService.updateDanhMucChucNang(id, {
      maChucNang,
      tenChucNang,
      moTa,
      trangThai,
    });

    responseHandler(
      res,
      200,
      "CẬP NHẬT DANH MỤC CHỨC NĂNG THÀNH CÔNG.",
      result
    );
  } catch (error) {
    next(error);
  }
};

const deleteDanhMucChucNang = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA!", null, true);

    const findById = await DanhMucChucNangService.findById(id);
    if (!findById)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    const result = await DanhMucChucNangService.deleteDanhMucChucNang(id);

    responseHandler(res, 200, "XÓA DANH MỤC CHỨC NĂNG THÀNH CÔNG.", result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllList,
  getById,
  createDanhMucChucNang,
  updateDanhMucChucNang,
  deleteDanhMucChucNang,
};

const khachHangService = require("../services/KhachHang.service");
const { responseHandler } = require("../utils/responseHandler");
const {
  isValidCCCD,
  isValidEmail,
  isValidPhone,
  isValidBirthday,
} = require("../utils/ValidateInput");

const getAllKhachHang = async (req, res, next) => {
  try {
    const result = await khachHangService.getAllKhachHang();
    if (!result)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    responseHandler(res, 200, "DANH SÁCH KHÁCH HÀNG", result);
  } catch (error) {
    next(error);
  }
};

const getAllKhachHangActive = async (req, res, next) => {
  try {
    const result = await khachHangService.getAllKhachHangActive();
    if (!result)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    responseHandler(res, 200, "DANH SÁCH KHÁCH HÀNG", result);
  } catch (error) {
    next(error);
  }
};

const getKhachHangById = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA!", null, true);

    const result = await khachHangService.findKhachHangById(id);
    if (!result)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    responseHandler(res, 200, "THÔNG TIN KHÁCH HÀNG", result);
  } catch (error) {
    next(error);
  }
};

const createKhachHang = async (req, res, next) => {
  let {
    hoTen,
    email,
    cccd,
    soDienThoai,
    gioiTinh,
    diaChi,
    ngaySinh,
    hinhAnh,
    trangThai,
  } = req.body;
  hoTen = hoTen?.trim();
  try {
    if (!hoTen || !email || !soDienThoai) {
      return responseHandler(
        res,
        400,
        "Vui lòng nhập đầy đủ thông tin!",
        null,
        true
      );
    }

    const validEmail = isValidEmail(email);
    if (!validEmail)
      return responseHandler(res, 422, "EMAIL KHÔNG HỢP LỆ!", null, true);

    if (cccd) {
      const validCCCD = isValidCCCD(cccd);
      if (!validCCCD)
        return responseHandler(res, 422, "CCCD KHÔNG HỢP LỆ!", null, true);
    }

    const validSoDienThoai = isValidPhone(soDienThoai);
    if (!validSoDienThoai)
      return responseHandler(res, 422, "SỐ ĐIỆN THOẠI KHÔNG ĐÚNG!", null, true);

    if (ngaySinh) {
      const validNgaySinh = isValidBirthday(ngaySinh);
      if (!validNgaySinh) {
        return responseHandler(res, 422, "NGÀY SINH KHÔNG HỢP LỆ!", null, true);
      }
    }

    const findByEmail = await khachHangService.findByEmail(email);
    if (findByEmail)
      return responseHandler(res, 409, "EMAIL ĐÃ TỒN TẠI!", null, true);

    const findByCCCD = await khachHangService.findByCCCD(cccd);
    if (findByCCCD)
      return responseHandler(res, 409, "SỐ CCCD ĐÃ TỒN TẠI!", null, true);

    const findBySoDienThoai =
      await khachHangService.findBySoDienThoai(soDienThoai);
    if (findBySoDienThoai)
      return responseHandler(res, 409, "SỐ ĐIỆN THOẠI ĐÃ TỒN TẠI!", null, true);

    const result = await khachHangService.createKhachHang({
      hoTen,
      email,
      cccd,
      soDienThoai,
      gioiTinh,
      diaChi,
      ngaySinh,
      hinhAnh,
      trangThai,
    });
    if (!result)
      return responseHandler(res, 404, "THAO TÁC THẤT BẠI!", null, true);

    responseHandler(res, 201, "TẠO MỚI THÀNH CÔNG", result);
  } catch (error) {
    next(error);
  }
};

const updateKhachHang = async (req, res, next) => {
  const { id } = req.params;
  let {
    hoTen,
    email,
    cccd,
    soDienThoai,
    gioiTinh,
    diaChi,
    ngaySinh,
    hinhAnh,
    trangThai,
  } = req.body;
  hoTen = hoTen?.trim();
  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA", null, true);

    if (!hoTen || !email || !cccd || !soDienThoai) {
      return responseHandler(
        res,
        400,
        "Vui lòng nhập đầy đủ thông tin!",
        null,
        true
      );
    }

    const findById = await khachHangService.findKhachHangById(id);
    if (!findById)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    const validEmail = isValidEmail(email);
    if (!validEmail)
      return responseHandler(res, 422, "EMAIL KHÔNG HỢP LỆ!", null, true);

    const validCCCD = isValidCCCD(cccd);
    if (!validCCCD)
      return responseHandler(res, 422, "CCCD KHÔNG HỢP LỆ!", null, true);

    const validSoDienThoai = isValidPhone(soDienThoai);
    if (!validSoDienThoai)
      return responseHandler(res, 422, "SỐ ĐIỆN THOẠI KHÔNG ĐÚNG!", null, true);

    if (ngaySinh) {
      const validNgaySinh = isValidBirthday(ngaySinh);
      if (!validNgaySinh) {
        return responseHandler(res, 422, "NGÀY SINH KHÔNG HỢP LỆ!", null, true);
      }
    }

    const checkExistEmail = await khachHangService.checkExistEmail(email, id);
    if (checkExistEmail)
      return responseHandler(res, 409, "EMAIL ĐÃ TỒN TẠI!", null, true);

    const checkExistCCCD = await khachHangService.checkExistCCCD(cccd, id);
    if (checkExistCCCD)
      return responseHandler(res, 409, "SỐ CCCD ĐÃ TỒN TẠI!", null, true);

    const checkExistSoDienThoai = await khachHangService.checkExistSoDienThoai(
      soDienThoai,
      id
    );
    if (checkExistSoDienThoai)
      return responseHandler(res, 409, "SỐ ĐIỆN THOẠI ĐÃ TỒN TẠI!", null, true);

    const result = await khachHangService.updateKhachHang(id, {
      hoTen,
      email,
      cccd,
      soDienThoai,
      gioiTinh,
      diaChi,
      ngaySinh,
      hinhAnh,
      trangThai,
    });
    if (!result)
      return responseHandler(res, 404, "THAO TÁC THẤT BẠI!", null, true);

    responseHandler(res, 200, "CẬP NHẬT THÀNH CÔNG", result);
  } catch (error) {
    next(error);
  }
};

const deleteKhachHang = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!id)
      return responseHandler(res, 400, "KHÔNG TÌM THẤY DATA", null, true);

    const findById = await khachHangService.findKhachHangById(id);
    if (!findById)
      return responseHandler(res, 404, "KHÔNG TỒN TẠI DATA!", null, true);

    const result = await khachHangService.deleteKhachHang(id);
    if (!result)
      return responseHandler(res, 404, "THAO TÁC THẤT BẠI!", null, true);

    responseHandler(res, 200, "XÓA THÀNH CÔNG", result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllKhachHang,
  getAllKhachHangActive,
  getKhachHangById,
  createKhachHang,
  updateKhachHang,
  deleteKhachHang,
};

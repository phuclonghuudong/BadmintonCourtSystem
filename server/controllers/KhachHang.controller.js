const khachHangService = require("../services/KhachHang.service");
const successHandler = require("../utils/successHandler");
const errorHandler = require("../utils/errorHandler");
const {
  isValidEmail,
  isValidPhone,
  isValidCCCD,
  isValidBirthday,
} = require("../utils/ValidateInput");

const getAllUsers = async (req, res, next) => {
  try {
    const result = await khachHangService.getAllUsers();
    successHandler(res, "DANH SÁCH TẤT CẢ KHÁCH HÀNG", result);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  const { MaKhachHang } = req.params;

  try {
    const result = await khachHangService.getUserById(MaKhachHang);
    if (!result) return errorHandler(res, "KHÔNG TÌM THẤY KHÁCH HÀNG!", 403);

    successHandler(res, "THÔNG TIN KHÁCH HÀNG!", result);
  } catch (error) {
    next(error);
  }
};

const addUser = async (req, res, next) => {
  const {
    Email,
    HoTen,
    SoDienThoai,
    CCCD,
    DiaChi,
    GioiTinh,
    NgaySinh,
    GhiChu,
    TrangThai,
  } = req.body;
  try {
    const errorMsg = validateInputCreate(req.body);
    if (errorMsg) {
      return res.status(400).json({
        ERROR: true,
        SUCCESS: false,
        MESSAGE: errorMsg,
      });
    }

    const duplicateError = await checkDuplicateFields({
      Email,
      SoDienThoai,
      CCCD,
    });
    if (duplicateError) {
      return res.status(409).json({
        ERROR: true,
        SUCCESS: false,
        MESSAGE: duplicateError,
      });
    }

    const result = await khachHangService.createUser({
      Email,
      HoTen,
      SoDienThoai,
      CCCD,
      DiaChi,
      GioiTinh,
      NgaySinh,
      GhiChu,
      TrangThai,
    });
    successHandler(res, "THÊM MỚI KHÁCH HÀNG THÀNH CÔNG!", result, 201);
  } catch (error) {
    next(error);
  }
};
const updateUsers = async (req, res, next) => {
  const { MaKhachHang } = req.params;
  const {
    Email,
    HoTen,
    SoDienThoai,
    CCCD,
    DiaChi,
    GioiTinh,
    NgaySinh,
    GhiChu,
    TrangThai,
  } = req.body;

  try {
    const findId = await khachHangService.findUserById(MaKhachHang);
    if (!findId) return errorHandler(res, "KHÔNG TÌM THẤY KHÁCH HÀNG!", 403);

    const result = await khachHangService.updateUser(MaKhachHang, {
      Email,
      HoTen,
      SoDienThoai,
      CCCD,
      DiaChi,
      GioiTinh,
      NgaySinh,
      GhiChu,
      TrangThai,
    });
    successHandler(res, "CẬP NHẬT KHÁCH HÀNG THÀNH CÔNG!", result);
  } catch (error) {
    next(error);
  }
};
const deleteUsers = async (req, res, next) => {
  const { MaKhachHang } = req.params;

  try {
    const findId = await khachHangService.findUserById(MaKhachHang);
    if (!findId) return errorHandler(res, "KHÔNG TÌM THẤY KHÁCH HÀNG!", 403);

    const result = await khachHangService.deleteUserXoa(MaKhachHang);
    successHandler(res, "XÓA KHÁCH HÀNG THÀNH CÔNG!", result);
  } catch (error) {
    next(error);
  }
};

const validateInputCreate = (data) => {
  const { Email, NgaySinh, SoDienThoai, CCCD } = data;

  if ([Email, SoDienThoai, CCCD].some((v) => !v || v.trim() === ""))
    return "Vui lòng nhập đầy đủ các trường bắt buộc.";

  if (!isValidEmail(Email)) return "Email không hợp lệ.";

  if (!isValidPhone(SoDienThoai)) return "Số điện thoại không hợp lệ.";

  if (!isValidCCCD(CCCD)) return "CCCD phải có đúng 12 chữ số.";

  if (NgaySinh && !isValidBirthday(NgaySinh))
    return "Ngày sinh không được lớn hơn ngày hiện tại.";

  return null;
};

const checkDuplicateFields = async ({ Email, SoDienThoai, CCCD }) => {
  const existedEmail = await khachHangService.findByEmail(Email);
  if (existedEmail) return "Email đã tồn tại.";

  const existedPhone = await khachHangService.findByPhone(SoDienThoai);
  if (existedPhone) return "Số điện thoại đã tồn tại.";

  const existedCCCD = await khachHangService.findByCCCD(CCCD);
  if (existedCCCD) return "CCCD đã tồn tại.";

  return null;
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUsers,
  deleteUsers,
};

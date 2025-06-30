const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllTaiKhoan = async () => {
  return await prisma.taikhoan.findMany({
    include: {
      nhanvien: true,
      nhomquyen: true,
    },
  });
};

const getAllTaiKhoanActive = async () => {
  return await prisma.taikhoan.findMany({
    where: {
      trangThai: {
        NOT: -1,
      },
    },
    include: {
      nhanvien: true,
      nhomquyen: true,
    },
  });
};

const findTaiKhoanByNhanVienId = async (id) => {
  return await prisma.taikhoan.findFirst({
    where: { nhanVienId: Number(id) },
  });
};

const findTaiKhoanByNhomQuyenId = async (id) => {
  return await prisma.taikhoan.findFirst({
    where: { nhomQuyenId: Number(id) },
    include: {
      nhanvien: true,
      nhomquyen: true,
    },
  });
};

const findTaiKhoanById = async (id) => {
  return await prisma.taikhoan.findUnique({
    where: { id: Number(id) },
    include: {
      nhanvien: true,
      nhomquyen: true,
    },
  });
};

const findTaiKhoanByTenDangNhap = async (value) => {
  return await prisma.taikhoan.findUnique({
    where: { tenDangNhap: value },
    include: {
      nhanvien: true,
      nhomquyen: true,
    },
  });
};

const checkExistTenDangNhap = async (tenDangNhap) => {
  return await prisma.taikhoan.findUnique({
    where: { tenDangNhap: tenDangNhap },
  });
};

const createTaiKhoan = async (data) => {
  return await prisma.taikhoan.create({
    data: {
      nhanVienId: Number(data.nhanVienId),
      nhomQuyenId: Number(data.nhomQuyenId),
      tenDangNhap: data.tenDangNhap,
      matKhau: data.matKhau,
      emailDaXacThuc: data.emailDaXacThuc || false,
      otpQuenMatKhau: data.otpQuenMatKhau || null,
      otpHetHanLuc: data.otpHetHanLuc || null,
      refreshToken: data.refreshToken || null,
      trangThai: data.trangThai || 1,
    },
  });
};

const updateVerifyEmailResetPassword = async (id, data) => {
  return await prisma.taikhoan.update({
    where: { id: Number(id) },
    data: {
      emailDaXacThuc: data.emailDaXacThuc,
      otpQuenMatKhau: String(data.otpQuenMatKhau),
      otpHetHanLuc: data.otpHetHanLuc,
    },
  });
};

module.exports = {
  getAllTaiKhoan,
  getAllTaiKhoanActive,
  findTaiKhoanById,
  findTaiKhoanByTenDangNhap,
  findTaiKhoanByNhomQuyenId,
  findTaiKhoanByNhanVienId,
  checkExistTenDangNhap,
  createTaiKhoan,
  updateVerifyEmailResetPassword,
};

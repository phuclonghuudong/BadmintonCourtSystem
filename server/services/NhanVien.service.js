const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Lấy tất cả
const getAllNhanVien = async () => {
  return await prisma.nhanvien.findMany({
    include: {
      TaiKhoan: true,
    },
  });
};

// Tìm theo Id
const getNhanVienById = async (id) => {
  return await prisma.nhanvien.findUnique({
    where: { id: id },
    include: {
      TaiKhoan: true,
    },
  });
};

// Tạo mới
const createNhanVien = async (data) => {
  return await prisma.nhanvien.create({
    data: {
      MaNhomQuyen: DEFAULT_ROLE,
      ...data,
    },
  });
};

// Cập nhật
const updateNhanVien = async (id, data) => {
  return await prisma.nhanvien.update({
    where: { MaNhanVien: id },
    data: {
      MaNhomQuyen: data.MaNhomQuyen,
      ...data,
    },
  });
};
// Cập nhật
const deleteNhanVien = async (id, data) => {
  return await prisma.taiKhoan.update({
    where: { MaNhanVien: id },
    data: {
      MaNhomQuyen: data.MaNhomQuyen,
      ...data,
    },
  });
};

// Xóa thật
const deleteData = async (id) => {
  return await prisma.nhanvien.delete({
    where: { MaNhanVien: id },
  });
};

module.exports = {
  getAllNhanVien,
  getNhanVienById,
  createNhanVien,
  updateNhanVien,
  getNhanVienById,
};

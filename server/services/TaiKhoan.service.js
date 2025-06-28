const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// lấy tất cả
const getAllTaiKhoan = async () => {
  return await prisma.taikhoan.findMany({
    include: {
      NhanVien: true,
      NhomQuyen: true,
    },
  });
};

// lấy theo id
const getTaiKhoanById = async (id) => {
  return await prisma.taikhoan.findUnique({
    where: { Id: id },
    include: {
      NhanVien: true,
      NhomQuyen: true,
    },
  });
};

//  Tạo mới
const createTaiKhoan = async (data) => {
  return await prisma.taikhoan.create({
    data: {
      ...data,
    },
  });
};

module.exports = {
  getAllTaiKhoan,
  createTaiKhoan,
  updateTaiKhoan,
  deleteTaiKhoan,
  getTaiKhoanById,
};

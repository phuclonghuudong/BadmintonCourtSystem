const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Lấy tất cả ChiTietQuyen
const getAllChiTietQuyen = async () => {
  return await prisma.chiTietQuyen.findMany({
    include: {
      NhomQuyen: true,
      DanhMucChucNang: true,
    },
  });
};

// Lấy theo MaNhomQuyen + MaChucNang (khóa chính)
const getChiTietQuyenById = async (MaNhomQuyen, MaChucNang) => {
  return await prisma.chiTietQuyen.findUnique({
    where: {
      MaNhomQuyen_MaChucNang: {
        MaNhomQuyen,
        MaChucNang,
      },
    },
    include: {
      NhomQuyen: true,
      DanhMucChucNang: true,
    },
  });
};

// Tạo mới
const createChiTietQuyen = async (data) => {
  return await prisma.chiTietQuyen.create({
    data: {
      MaNhomQuyen: data.MaNhomQuyen,
      MaChucNang: data.MaChucNang,
      HanhDong: data.HanhDong,
      TrangThai: data.TrangThai ?? true,
    },
  });
};

// Cập nhật
const updateChiTietQuyen = async (MaNhomQuyen, MaChucNang, data) => {
  return await prisma.chiTietQuyen.update({
    where: {
      MaNhomQuyen_MaChucNang: {
        MaNhomQuyen,
        MaChucNang,
      },
    },
    data,
  });
};

// Xóa
const deleteChiTietQuyen = async (MaNhomQuyen, MaChucNang) => {
  return await prisma.chiTietQuyen.delete({
    where: {
      MaNhomQuyen_MaChucNang: {
        MaNhomQuyen,
        MaChucNang,
      },
    },
  });
};

// Lấy danh sách theo MaNhomQuyen
const getChiTietByNhomQuyen = async (MaNhomQuyen) => {
  return await prisma.chiTietQuyen.findMany({
    where: { MaNhomQuyen },
    include: {
      DanhMucChucNang: true,
    },
  });
};

module.exports = {
  getAllChiTietQuyen,
  getChiTietQuyenById,
  createChiTietQuyen,
  updateChiTietQuyen,
  deleteChiTietQuyen,
  getChiTietByNhomQuyen,
};

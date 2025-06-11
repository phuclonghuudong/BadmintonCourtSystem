const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllLoaiSanPham = async () => {
  return await prisma.loaiSanPham.findMany({
    include: {
      SanPham: true,
    },
  });
};

const getLoaiSanPhamById = async (MaLoaiSanPham) => {
  return await prisma.loaiSanPham.findUnique({
    where: { MaLoaiSanPham },
    include: {
      SanPham: true,
    },
  });
};

const createLoaiSanPham = async (data) => {
  return await prisma.loaiSanPham.create({
    data: {
      MaLoaiSanPham: data.MaLoaiSanPham,
      TenLoaiSanPham: data.TenLoaiSanPham,
      MoTa: data.MoTa || "",
      TrangThai: data.TrangThai ?? true,
    },
  });
};

const updateLoaiSanPham = async (MaLoaiSanPham, data) => {
  return await prisma.loaiSanPham.update({
    where: { MaLoaiSanPham },
    data,
  });
};

const deleteLoaiSanPham = async (MaLoaiSanPham) => {
  return await prisma.loaiSanPham.delete({
    where: { MaLoaiSanPham },
  });
};

module.exports = {
  getAllLoaiSanPham,
  getLoaiSanPhamById,
  createLoaiSanPham,
  updateLoaiSanPham,
  deleteLoaiSanPham,
};

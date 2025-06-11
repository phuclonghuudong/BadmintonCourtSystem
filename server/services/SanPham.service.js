const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllSanPham = async () => {
  return await prisma.sanPham.findMany({
    include: {
      LoaiSanPham: true,
    },
  });
};

const getSanPhamById = async (id) => {
  return await prisma.sanPham.findUnique({
    where: { MaSanPham: id },
    include: {
      LoaiSanPham: true,
    },
  });
};

const createSanPham = async (data) => {
  return await prisma.sanPham.create({
    data: {
      MaSanPham: data.MaSanPham,
      MaLoaiSanPham: data.MaLoaiSanPham,
      TenSanPham: data.TenSanPham,
      DonViTinh: data.DonViTinh || null,
      HinhAnh: data.HinhAnh || null,
      TrangThai: data.TrangThai ?? true,
    },
  });
};

const updateSanPham = async (id, data) => {
  return await prisma.sanPham.update({
    where: { MaSanPham: id },
    data,
  });
};

const deleteSanPham = async (MaSanPham) => {
  return await prisma.sanPham.delete({
    where: { MaSanPham },
  });
};

const getSanPhamByLoai = async (id) => {
  return await prisma.sanPham.findMany({
    where: { MaLoaiSanPham: id },
    include: {
      LoaiSanPham: true,
    },
  });
};

module.exports = {
  getAllSanPham,
  getSanPhamById,
  createSanPham,
  updateSanPham,
  deleteSanPham,
  getSanPhamByLoai,
};

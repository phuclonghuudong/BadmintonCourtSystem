const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllSanPham = async () => {
  return await prisma.sanpham.findMany({
    orderBy: {
      id: "asc",
    },
    include: {
      loaisanpham: true,
    },
  });
};

const findSanPhamById = async (id) => {
  return await prisma.sanpham.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      loaisanpham: true,
    },
  });
};

const createSanPham = async (data) => {
  return await prisma.sanpham.create({
    data: {
      loaiSanPhamId: data.loaiSanPhamId,
      tenSanPham: data.tenSanPham,
      giaSanPham: data.giaSanPham,
      donViTinh: data.donViTinh,
      soLuong: data.soLuong,
      moTa: data.moTa,
      hinhAnh: data.hinhAnh,
      trangThai: data.trangThai ?? 1,
    },
  });
};
const updateSanPham = async (id, data) => {
  return await prisma.sanpham.update({
    where: {
      id: Number(id),
    },
    data: {
      loaiSanPhamId: data.loaiSanPhamId,
      tenSanPham: data.tenSanPham,
      giaSanPham: data.giaSanPham,
      soLuong: data.soLuong,
      donViTinh: data.donViTinh,
      moTa: data.moTa,
      hinhAnh: data.hinhAnh,
      trangThai: data.trangThai,
    },
  });
};

const deleteSanPham = async (id) => {
  return await prisma.sanpham.update({
    where: {
      id: Number(id),
    },
    data: {
      trangThai: -1,
    },
  });
};

const deleteHardSanPham = async (id) => {
  return await prisma.sanpham.delete({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  getAllSanPham,
  findSanPhamById,
  createSanPham,
  updateSanPham,
  deleteSanPham,
};

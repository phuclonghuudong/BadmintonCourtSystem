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
  const newID = await generateNewId();
  return await prisma.loaiSanPham.create({
    data: {
      MaLoaiSanPham: newID,
      ...data,
    },
  });
};

const updateLoaiSanPham = async (MaLoaiSanPham, data) => {
  return await prisma.loaiSanPham.update({
    where: { MaLoaiSanPham },
    data,
  });
};
const deleteLoaiSanPhamXoa = async (MaLoaiSanPham, data) => {
  return await prisma.loaiSanPham.update({
    where: { MaLoaiSanPham },
    data: {
      TrangThai: -1,
    },
  });
};

const deleteLoaiSanPham = async (MaLoaiSanPham) => {
  return await prisma.loaiSanPham.delete({
    where: { MaLoaiSanPham },
  });
};

const generateNewId = async () => {
  const last = await prisma.loaiSanPham.findFirst({
    orderBy: {
      MaLoaiSanPham: "desc",
    },
  });

  if (!last) {
    return "LSP001";
  }

  const lastNumber = parseInt(last.MaLoaiSanPham.replace("LSP", ""));
  const newNumber = (lastNumber + 1).toString().padStart(3, "0");
  return `LSP${newNumber}`;
};

module.exports = {
  getAllLoaiSanPham,
  getLoaiSanPhamById,
  createLoaiSanPham,
  updateLoaiSanPham,
  deleteLoaiSanPhamXoa,
  deleteLoaiSanPham,
};

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
  const newID = await generateNewId();
  return await prisma.sanPham.create({
    data: {
      MaSanPham: newID,
      MaLoaiSanPham: data.MaLoaiSanPham,
      TenSanPham: data.TenSanPham,
      DonViTinh: data.DonViTinh || null,
      HinhAnh: data.HinhAnh || null,
      TrangThai: data.TrangThai,
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

const generateNewId = async () => {
  const last = await prisma.sanPham.findFirst({
    orderBy: {
      MaSanPham: "desc",
    },
  });

  if (!last) {
    return "SP001";
  }

  const lastNumber = parseInt(last.MaSanPham.replace("SP", ""));
  const newNumber = (lastNumber + 1).toString().padStart(3, "0");
  return `SP${newNumber}`;
};

module.exports = {
  getAllSanPham,
  getSanPhamById,
  createSanPham,
  updateSanPham,
  deleteSanPham,
  getSanPhamByLoai,
};

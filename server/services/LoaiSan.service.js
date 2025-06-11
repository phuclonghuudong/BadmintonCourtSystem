const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllLoaiSan = async () => {
  return await prisma.loaiSan.findMany();
};

const getLoaiSanById = async (id) => {
  return await prisma.loaiSan.findUnique({
    where: { MaLoaiSan: id },
  });
};

const createLoaiSan = async (data) => {
  const newID = await generateNewId();
  return await prisma.loaiSan.create({
    data: { MaLoaiSan: newID, ...data },
  });
};

const updateLoaiSan = async (id, data) => {
  return await prisma.loaiSan.update({
    where: { MaLoaiSan: id },
    data: data,
  });
};
const deleteLoaiSanXoa = async (id, data) => {
  return await prisma.loaiSan.update({
    where: { MaLoaiSan: id },
    data: {
      TrangThai: -1,
    },
  });
};

const deleteLoaiSan = async (id) => {
  return await prisma.loaiSan.delete({
    where: { MaLoaiSan: parseInt(id) },
  });
};

const generateNewId = async () => {
  const last = await prisma.loaiSan.findFirst({
    orderBy: {
      MaLoaiSan: "desc",
    },
  });

  if (!last) {
    return "LS001";
  }

  const lastNumber = parseInt(last.MaLoaiSan.replace("LS", ""));
  const newNumber = (lastNumber + 1).toString().padStart(3, "0");
  return `LS${newNumber}`;
};

module.exports = {
  getAllLoaiSan,
  getLoaiSanById,
  createLoaiSan,
  updateLoaiSan,
  deleteLoaiSanXoa,
  deleteLoaiSan,
};

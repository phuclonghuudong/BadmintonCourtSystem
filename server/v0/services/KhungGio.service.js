const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllKhungGio = async () => {
  return await prisma.khungGio.findMany({
    include: {
      GiaThue: true,
    },
  });
};

const getKhungGioById = async (id) => {
  return await prisma.khungGio.findUnique({
    where: { MaKhungGio: id },
    include: {
      GiaThue: true,
    },
  });
};

const createKhungGio = async (data) => {
  const newID = await generateNewId();
  return await prisma.khungGio.create({
    data: {
      MaKhungGio: newID,
      GioBatDau: data.GioBatDau,
      GioKetThuc: data.GioKetThuc,
      MoTa: data.MoTa || "",
      TrangThai: data.TrangThai ?? true,
    },
  });
};

const updateKhungGio = async (id, data) => {
  return await prisma.khungGio.update({
    where: { MaKhungGio: id },
    data,
  });
};

const deleteKhungGio = async (id) => {
  return await prisma.khungGio.delete({
    where: { MaKhungGio: id },
  });
};

const generateNewId = async () => {
  const last = await prisma.khungGio.findFirst({
    orderBy: {
      MaKhungGio: "desc",
    },
  });

  if (!last) {
    return "KG001";
  }

  const lastNumber = parseInt(last.MaKhungGio.replace("KG", ""));
  const newNumber = (lastNumber + 1).toString().padStart(3, "0");
  return `KG${newNumber}`;
};

module.exports = {
  getAllKhungGio,
  getKhungGioById,
  createKhungGio,
  updateKhungGio,
  deleteKhungGio,
};

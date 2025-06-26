const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllGiaThue = async () => {
  return await prisma.giaThue.findMany({
    include: {
      San: true,
      KhungGio: true,
    },
  });
};

const getGiaThueById = async (MaGiaThue) => {
  return await prisma.giaThue.findUnique({
    where: { MaGiaThue },
    include: {
      San: true,
      KhungGio: true,
    },
  });
};

const createGiaThue = async (data) => {
  const newID = await generateNewId();
  return await prisma.giaThue.create({
    data: {
      MaGiaThue: newID,
      ...data,
    },
  });
};

const updateGiaThue = async (MaGiaThue, data) => {
  return await prisma.giaThue.update({
    where: { MaGiaThue },
    data,
  });
};

const deleteGiaThue = async (MaGiaThue) => {
  return await prisma.giaThue.delete({
    where: { MaGiaThue },
  });
};

const getGiaThueBySanKhungGioThu = async (MaSan, MaKhungGio, ThuTrongTuan) => {
  return await prisma.giaThue.findFirst({
    where: {
      MaSan,
      MaKhungGio,
      ThuTrongTuan,
      TrangThai: true,
    },
  });
};

const generateNewId = async () => {
  const last = await prisma.giaThue.findFirst({
    orderBy: {
      MaGiaThue: "desc",
    },
  });

  if (!last) {
    return "GIA001";
  }

  const lastNumber = parseInt(last.MaGiaThue.replace("GIA", ""));
  const newNumber = (lastNumber + 1).toString().padStart(3, "0");
  return `GIA${newNumber}`;
};

module.exports = {
  getAllGiaThue,
  getGiaThueById,
  createGiaThue,
  updateGiaThue,
  deleteGiaThue,
  getGiaThueBySanKhungGioThu,
};

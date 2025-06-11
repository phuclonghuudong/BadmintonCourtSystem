const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const generateNewMaNhomQuyen = async () => {
  const last = await prisma.nhomQuyen.findFirst({
    orderBy: {
      MaNhomQuyen: "desc",
    },
  });

  if (!last) {
    return "QUYEN001";
  }

  const lastNumber = parseInt(last.MaNhomQuyen.replace("QUYEN", ""));
  const newNumber = (lastNumber + 1).toString().padStart(3, "0");
  return `QUYEN${newNumber}`;
};

const getAllNhomQuyen = async () => {
  return await prisma.nhomQuyen.findMany();
};

const getNhomQuyenById = async (id) => {
  return await prisma.nhomQuyen.findUnique({
    where: { MaNhomQuyen: id },
  });
};

const createNhomQuyen = async (data) => {
  const newMaNhomQuyen = await generateNewMaNhomQuyen();

  return await prisma.nhomQuyen.create({
    data: {
      MaNhomQuyen: newMaNhomQuyen,
      ...data,
    },
  });
};

const updateNhomQuyen = async (id, data) => {
  return await prisma.nhomQuyen.update({
    where: { MaNhomQuyen: id },
    data: data,
  });
};

const deleteNhomQuyen = async (id) => {
  return await prisma.nhomQuyen.delete({
    where: { MaNhomQuyen: id },
  });
};

const deleteNhomQuyenXoa = async (id) => {
  return await prisma.nhomQuyen.update({
    where: { MaNhomQuyen: id },
    data: {
      TrangThai: -1,
    },
  });
};

module.exports = {
  getAllNhomQuyen,
  getNhomQuyenById,
  createNhomQuyen,
  updateNhomQuyen,
  deleteNhomQuyenXoa,
  deleteNhomQuyen,
};

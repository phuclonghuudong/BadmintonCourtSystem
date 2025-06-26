const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllNhomQuyen = async () => {
  return await prisma.nhomQuyen.findMany();
};
const createNhomQuyen = async (data) => {
  return await prisma.nhomQuyen.create({
    data: {
      ...data,
    },
  });
};

module.exports = {
  getAllNhomQuyen,
  createNhomQuyen,
};

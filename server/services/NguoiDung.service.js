const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllUsers = async () => {
  return await prisma.nguoiDung.findMany();
};

const getUserById = async (id) => {
  return await prisma.nguoiDung.findUnique({
    where: { MaNguoiDung: id },
  });
};

const createUser = async (data) => {
  return await prisma.nguoiDung.create({
    data: data,
  });
};

const updateUser = async (id, data) => {
  return await prisma.nguoiDung.update({
    where: { MaNguoiDung: id },
    data: data,
  });
};

const deleteUser = async (id) => {
  return await prisma.nguoiDung.delete({
    where: { MaNguoiDung: id },
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

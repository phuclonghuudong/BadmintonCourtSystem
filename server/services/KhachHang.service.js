const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllUsers = async () => {
  return await prisma.khachHang.findMany();
};

const getUserById = async (id) => {
  return await prisma.khachHang.findUnique({
    where: { MaKhachHang: id },
  });
};

const createUser = async (data) => {
  return await prisma.khachHang.create({
    data: data,
  });
};

const updateUser = async (id, data) => {
  return await prisma.khachHang.update({
    where: { MaKhachHang: id },
    data: data,
  });
};

const deleteUser = async (id) => {
  return await prisma.khachHang.delete({
    where: { MaKhachHang: parseInt(id) },
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

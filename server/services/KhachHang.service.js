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
  const newID = await generateNewId();
  return await prisma.khachHang.create({
    data: {
      MaKhachHang: newID,
      ...data,
    },
  });
};

const updateUser = async (id, data) => {
  return await prisma.khachHang.update({
    where: { MaKhachHang: id },
    data: data,
  });
};
const deleteUserXoa = async (id) => {
  return await prisma.khachHang.update({
    where: { MaKhachHang: id },
    data: { TrangThai: -1 },
  });
};

const deleteUser = async (id) => {
  return await prisma.khachHang.delete({
    where: { MaKhachHang: parseInt(id) },
  });
};
const generateNewId = async () => {
  const last = await prisma.khachHang.findFirst({
    orderBy: {
      MaKhachHang: "desc",
    },
  });

  if (!last) {
    return "KH001";
  }

  const lastNumber = parseInt(last.MaKhachHang.replace("KH", ""));
  const newNumber = (lastNumber + 1).toString().padStart(3, "0");
  return `KH${newNumber}`;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserXoa,
  deleteUser,
};

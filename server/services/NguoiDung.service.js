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
  const newID = await generateNewId();
  return await prisma.nguoiDung.create({
    data: { MaNguoiDung: newID, ...data },
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

const generateNewId = async () => {
  const last = await prisma.nguoiDung.findFirst({
    orderBy: {
      MaNguoiDung: "desc",
    },
  });

  if (!last) {
    return "ND001";
  }

  const lastNumber = parseInt(last.MaNguoiDung.replace("ND", ""));
  const newNumber = (lastNumber + 1).toString().padStart(3, "0");
  return `ND${newNumber}`;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

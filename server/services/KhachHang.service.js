const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const parseBirthday = async (value) => {
  const date = new Date(value);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

const getAllKhachHang = async () => {
  return await prisma.khachhang.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

const getAllKhachHangActive = async () => {
  return await prisma.khachhang.findMany({
    where: {
      trangThai: {
        not: -1,
      },
    },
    orderBy: {
      id: "asc",
    },
  });
};

const findKhachHangById = async (id) => {
  return await prisma.khachhang.findUnique({
    where: {
      id: Number(id),
    },
  });
};

const createKhachHang = async (data) => {
  const parsedNgaySinh = await parseBirthday(data.ngaySinh);
  return await prisma.khachhang.create({
    data: {
      hoTen: data.hoTen,
      email: data.email,
      cccd: data.cccd,
      soDienThoai: data.soDienThoai,
      gioiTinh: Number(data.gioiTinh) ?? 1,
      diaChi: data.diaChi,
      ngaySinh: parsedNgaySinh,
      hinhAnh: data.hinhAnh,
      trangThai: Number(data.trangThai) ?? 1,
    },
  });
};

const updateKhachHang = async (id, data) => {
  const parsedNgaySinh = await parseBirthday(data.ngaySinh);
  return await prisma.khachhang.update({
    where: { id: Number(id) },
    data: {
      hoTen: data.hoTen,
      email: data.email,
      cccd: data.cccd,
      soDienThoai: data.soDienThoai,
      gioiTinh: Number(data.gioiTinh),
      diaChi: data.diaChi,
      ngaySinh: parsedNgaySinh,
      hinhAnh: data.hinhAnh,
      trangThai: Number(data.trangThai),
    },
  });
};

const deleteKhachHang = async (id) => {
  return await prisma.khachhang.update({
    where: { id: id },
    data: { trangThai: -1 },
  });
};

const findByEmail = async (email) => {
  return await prisma.khachhang.findUnique({
    where: {
      email: email,
    },
  });
};

const findByCCCD = async (value) => {
  return await prisma.khachhang.findUnique({
    where: {
      cccd: value,
    },
  });
};

const findBySoDienThoai = async (value) => {
  return await prisma.khachhang.findUnique({
    where: {
      soDienThoai: value,
    },
  });
};

const checkExistEmail = async (email, id) => {
  return await prisma.khachhang.findUnique({
    where: {
      email: email,
      NOT: {
        id: Number(id),
      },
    },
  });
};

const checkExistCCCD = async (cccd, id) => {
  return await prisma.khachhang.findUnique({
    where: {
      cccd: cccd,
      NOT: {
        id: Number(id),
      },
    },
  });
};

const checkExistSoDienThoai = async (soDienThoai, id) => {
  return await prisma.khachhang.findUnique({
    where: {
      soDienThoai: soDienThoai,
      NOT: {
        id: Number(id),
      },
    },
  });
};

// DELETE HARD
const deleteData = async (id) => {
  return await prisma.khachhang.delete({
    where: { id: id },
  });
};

module.exports = {
  getAllKhachHang,
  getAllKhachHangActive,
  findKhachHangById,
  createKhachHang,
  updateKhachHang,
  deleteKhachHang,
  findByCCCD,
  findByEmail,
  findBySoDienThoai,
  checkExistCCCD,
  checkExistEmail,
  checkExistSoDienThoai,
};

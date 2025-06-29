const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const findAccountByValueInput = async ({ type, value }) => {
  const commonSelect = {
    id: true,
    nhanVienId: true,
    nhomQuyenId: true,
    matKhau: true,
    trangThai: true,
    refreshToken: true,
    nhanvien: {
      select: {
        id: true,
        hoTen: true,
        email: true,
        soDienThoai: true,
        hinhAnh: true,
        gioiTinh: true,
        ngaySinh: true,
        diaChi: true,
      },
    },
    nhomquyen: {
      select: {
        id: true,
        maQuyen: true,
        tenQuyen: true,
        trangThai: true,
      },
    },
  };
  if (type === "EMAIL") {
    return await prisma.taikhoan.findFirst({
      where: {
        nhanvien: {
          email: value,
        },
      },
      select: commonSelect,
    });
  } else {
    return await prisma.taikhoan.findFirst({
      where: {
        tenDangNhap: value,
      },
      select: commonSelect,
    });
  }
};

const updateRefreshToken = async (ID, token) => {
  return await prisma.taikhoan.update({
    where: {
      id: Number(ID),
    },
    data: {
      refreshToken: token || null,
    },
  });
};

module.exports = { findAccountByValueInput, updateRefreshToken };

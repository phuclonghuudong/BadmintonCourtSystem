/*
  Warnings:

  - Made the column `hanhDong` on table `chitietquyen` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tenChucNang` on table `danhmucchucnang` required. This step will fail if there are existing NULL values in that column.
  - Made the column `maChucNang` on table `danhmucchucnang` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ngayDat` on table `datsan` required. This step will fail if there are existing NULL values in that column.
  - Made the column `checkIn` on table `datsan` required. This step will fail if there are existing NULL values in that column.
  - Made the column `checkOut` on table `datsan` required. This step will fail if there are existing NULL values in that column.
  - Made the column `giaSan` on table `datsan` required. This step will fail if there are existing NULL values in that column.
  - Made the column `giaTien` on table `giathue` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hoTen` on table `khachhang` required. This step will fail if there are existing NULL values in that column.
  - Made the column `soDienThoai` on table `khachhang` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gioBatDau` on table `khunggio` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gioKetThuc` on table `khunggio` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tenLoaiSan` on table `loaisan` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tenLoaiSanPham` on table `loaisanpham` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `nhanvien` required. This step will fail if there are existing NULL values in that column.
  - Made the column `soDienThoai` on table `nhanvien` required. This step will fail if there are existing NULL values in that column.
  - Made the column `maQuyen` on table `nhomquyen` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tenQuyen` on table `nhomquyen` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tenSan` on table `san` required. This step will fail if there are existing NULL values in that column.
  - Made the column `giaSan` on table `san` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tenSanPham` on table `sanpham` required. This step will fail if there are existing NULL values in that column.
  - Made the column `giaSanPham` on table `sanpham` required. This step will fail if there are existing NULL values in that column.
  - Made the column `donViTinh` on table `sanpham` required. This step will fail if there are existing NULL values in that column.
  - Made the column `soLuong` on table `sanpham` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tenDangNhap` on table `taikhoan` required. This step will fail if there are existing NULL values in that column.
  - Made the column `matKhau` on table `taikhoan` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `chitietdatsan` MODIFY `ghiChu` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `chitietquyen` MODIFY `hanhDong` VARCHAR(191) NOT NULL,
    MODIFY `moTa` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `danhmucchucnang` MODIFY `moTa` VARCHAR(191) NULL,
    MODIFY `tenChucNang` VARCHAR(191) NOT NULL,
    MODIFY `maChucNang` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `datsan` MODIFY `ngayDat` DATETIME(3) NOT NULL,
    MODIFY `checkIn` DATETIME(3) NOT NULL,
    MODIFY `checkOut` DATETIME(3) NOT NULL,
    MODIFY `giaSan` DOUBLE NOT NULL,
    MODIFY `tongTien` DOUBLE NULL,
    MODIFY `thanhToan` VARCHAR(191) NULL,
    MODIFY `ghiChu` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `giathue` MODIFY `giaTien` DOUBLE NOT NULL,
    MODIFY `moTa` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `khachhang` MODIFY `hoTen` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NULL,
    MODIFY `cccd` VARCHAR(191) NULL,
    MODIFY `soDienThoai` VARCHAR(191) NOT NULL,
    MODIFY `gioiTinh` INTEGER NULL,
    MODIFY `diaChi` VARCHAR(191) NULL,
    MODIFY `ngaySinh` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `khunggio` MODIFY `gioBatDau` VARCHAR(191) NOT NULL,
    MODIFY `gioKetThuc` VARCHAR(191) NOT NULL,
    MODIFY `moTa` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `loaisan` MODIFY `tenLoaiSan` VARCHAR(191) NOT NULL,
    MODIFY `moTa` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `loaisanpham` MODIFY `tenLoaiSanPham` VARCHAR(191) NOT NULL,
    MODIFY `moTa` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `nhanvien` MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `cccd` VARCHAR(191) NULL,
    MODIFY `soDienThoai` VARCHAR(191) NOT NULL,
    MODIFY `gioiTinh` INTEGER NULL,
    MODIFY `diaChi` VARCHAR(191) NULL,
    MODIFY `ngaySinh` DATETIME(3) NULL,
    MODIFY `hinhAnh` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `nhomquyen` MODIFY `maQuyen` VARCHAR(191) NOT NULL,
    MODIFY `moTa` VARCHAR(191) NULL,
    MODIFY `tenQuyen` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `san` MODIFY `tenSan` VARCHAR(191) NOT NULL,
    MODIFY `giaSan` DOUBLE NOT NULL,
    MODIFY `moTa` VARCHAR(191) NULL,
    MODIFY `hinhAnh` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `sanpham` MODIFY `tenSanPham` VARCHAR(191) NOT NULL,
    MODIFY `giaSanPham` DOUBLE NOT NULL,
    MODIFY `donViTinh` VARCHAR(191) NOT NULL,
    MODIFY `moTa` VARCHAR(191) NULL,
    MODIFY `hinhAnh` VARCHAR(191) NULL,
    MODIFY `soLuong` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `taikhoan` MODIFY `tenDangNhap` VARCHAR(191) NOT NULL,
    MODIFY `matKhau` VARCHAR(191) NOT NULL,
    MODIFY `emailDaXacThuc` BOOLEAN NULL,
    MODIFY `otpQuenMatKhau` VARCHAR(191) NULL,
    MODIFY `otpHetHanLuc` DATETIME(3) NULL,
    MODIFY `refreshToken` VARCHAR(191) NULL;

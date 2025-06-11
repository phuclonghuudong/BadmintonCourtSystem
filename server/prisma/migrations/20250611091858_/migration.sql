/*
  Warnings:

  - Added the required column `updatedAt` to the `ChiTietDatSan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ChiTietQuyen` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `DanhMucChucNang` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `DatSan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `GiaThue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `KhachHang` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `KhungGio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `LoaiSan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `LoaiSanPham` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `NguoiDung` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `NhomQuyen` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `San` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `SanPham` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TaiKhoan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `chitietdatsan` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `TrangThai` INTEGER NULL;

-- AlterTable
ALTER TABLE `chitietquyen` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `TrangThai` INTEGER NULL;

-- AlterTable
ALTER TABLE `danhmucchucnang` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `TrangThai` INTEGER NULL;

-- AlterTable
ALTER TABLE `datsan` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `TrangThai` INTEGER NULL;

-- AlterTable
ALTER TABLE `giathue` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `TrangThai` INTEGER NULL;

-- AlterTable
ALTER TABLE `khachhang` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `TrangThai` INTEGER NULL;

-- AlterTable
ALTER TABLE `khunggio` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `TrangThai` INTEGER NULL;

-- AlterTable
ALTER TABLE `loaisan` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `TrangThai` INTEGER NULL;

-- AlterTable
ALTER TABLE `loaisanpham` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `TrangThai` INTEGER NULL;

-- AlterTable
ALTER TABLE `nguoidung` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `TrangThai` INTEGER NULL;

-- AlterTable
ALTER TABLE `nhomquyen` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `TrangThai` INTEGER NULL;

-- AlterTable
ALTER TABLE `san` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `TrangThai` INTEGER NULL;

-- AlterTable
ALTER TABLE `sanpham` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `TrangThai` INTEGER NULL;

-- AlterTable
ALTER TABLE `taikhoan` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `TrangThai` INTEGER NULL;

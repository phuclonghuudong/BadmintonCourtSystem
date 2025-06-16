/*
  Warnings:

  - Made the column `RefreshToken` on table `taikhoan` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `KhachHang_HoTen_key` ON `khachhang`;

-- DropIndex
DROP INDEX `NguoiDung_HoTen_key` ON `nguoidung`;

-- AlterTable
ALTER TABLE `taikhoan` MODIFY `RefreshToken` VARCHAR(500) NOT NULL;

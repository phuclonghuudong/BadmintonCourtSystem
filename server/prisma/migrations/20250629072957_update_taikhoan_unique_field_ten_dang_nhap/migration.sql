/*
  Warnings:

  - A unique constraint covering the columns `[tenDangNhap]` on the table `taikhoan` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `taikhoan_tenDangNhap_key` ON `taikhoan`(`tenDangNhap`);

-- AlterTable
ALTER TABLE `nguoidung` ADD COLUMN `Avatar` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `taikhoan` ADD COLUMN `ForgotPasswordExpiry` DATETIME(3) NULL,
    ADD COLUMN `ForgotPasswordOtp` VARCHAR(191) NULL,
    ADD COLUMN `RefreshToken` VARCHAR(191) NULL,
    ADD COLUMN `VerifyEmail` BOOLEAN NOT NULL DEFAULT false;

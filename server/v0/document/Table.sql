CREATE TABLE `NhanVien` (
  `MaNhanVien` Int(10),
  `Hoten` Varchar(100),
  `Email` Varchar(100),
  `CCCD` Varchar(100),
  `SoDienThoai` Varchar(100),
  `GioiTinh` Int,
  `DiaChi` Varchar(100),
  `NgaySinh` DateTime(3),
  `HinhAnh` Varchar(100),
  `TrangThai` Int,
  `created` DATETIME(3),
  `updated` DATETIME(3)
);

CREATE TABLE `KhachHang` (
  `MaKhachHang` Int(10),
  `Hoten` Varchar(100),
  `Email` Varchar(100),
  `CCCD` Varchar(100),
  `SoDienThoai` Varchar(100),
  `GioiTinh` Int,
  `DiaChi` Varchar(100),
  `NgaySinh` DateTime(3),
  `HinhAnh` Varchar(100),
  `TrangThai` Int,
  `created` DATETIME(3),
  `updated` DATETIME(3)
);

CREATE TABLE `NhomQuyen` (
  `MaNhomQuyen` Int(10),
  `TenNhomQuyen` Varchar(100),
  `MoTa` Varchar(255),
  `TrangThai` Int,
  `created` DATETIME(3),
  `updated` DATETIME(3)
);

CREATE TABLE `TaiKhoan` (
  `ID` Int(10),
  `MaNhanVien` Int(10),
  `MaNhomQuyen` Int(10),
  `TenDangNhap` Varchar(100),
  `MatKhau` Varchar(100),
  `VerifyEmail` Boolean,
  `ForgotPasswordOtp` Varchar(100),
  `ForgotPasswordExpiry` DateTime(3),
  `RefreshToken` Varchar(100),
  `TrangThai` Int,
  `created` DATETIME(3),
  `updated` DATETIME(3),
  FOREIGN KEY (`MaNhanVien`) REFERENCES `NhanVien`(`MaNhanVien`),
  FOREIGN KEY (`MaNhomQuyen`) REFERENCES `NhomQuyen`(`MaNhomQuyen`)
);

CREATE TABLE `LoaiSan` (
  `MaLoaiSan` Int(10),
  `TenLoaiSan` Varchar(100),
  `Mota` Varchar(100),
  `TrangThai` Int,
  `created` DATETIME(3),
  `updated` DATETIME(3)
);

CREATE TABLE `LoaiSanPham` (
  `MaLoaiSanPham` Int(10),
  `TenLoaiSanPham` Varchar(100),
  `Mota` Varchar(100),
  `TrangThai` Int,
  `created` DATETIME(3),
  `updated` DATETIME(3)
);

CREATE TABLE `SanPham` (
  `MaSanPham` Int(10),
  `MaLoaiSanPham` Int(10),
  `TenSanPham` Varchar(100),
  `GiaSanPham` Double,
  `DonViTinh` Int,
  `MoTa` Varchar(100),
  `HinhAnh` Varchar(100),
  `TrangThai` Int,
  `created` DATETIME(3),
  `updated` DATETIME(3),
  FOREIGN KEY (`MaLoaiSanPham`) REFERENCES `LoaiSanPham`(`MaLoaiSanPham`)
);

CREATE TABLE `San` (
  `MaSan` Int(10),
  `MaLoaiSan` Int(10),
  `TenSan` Varchar(100),
  `GiaSan` Double,
  `DonViTinh` Int,
  `MoTa` Varchar(100),
  `HinhAnh` Varchar(100),
  `TrangThai` Int,
  `created` DATETIME(3),
  `updated` DATETIME(3),
  FOREIGN KEY (`MaSan`) REFERENCES `LoaiSan`(`MaLoaiSan`)
);

CREATE TABLE `KhungGio` (
  `MaKhungGio` Int(10),
  `GioBatDau` Varchar(100),
  `GioKetThuc` Varchar(100),
  `MoTa` Varchar(100),
  `TrangThai` Int,
  `created` DATETIME(3),
  `updated` DATETIME(3)
);

CREATE TABLE `GiaThue` (
  `MaGiaThue` Int(10),
  `MaSan` Int(10),
  `MaKhungGio` Int(10),
  `ThuTrongTuan` Varchar(50),
  `GiaTien` Double,
  `MoTa` Varchar(100),
  `TrangThai` Int,
  `created` DATETIME(3),
  `updated` DATETIME(3),
  FOREIGN KEY (`MaKhungGio`) REFERENCES `KhungGio`(`MaKhungGio`),
  FOREIGN KEY (`MaSan`) REFERENCES `San`(`MaSan`)
);

CREATE TABLE `DatSan` (
  `ID` Int(10),
  `MaDatSan` Varchat(10),
  `MaSan` Int(10),
  `MaKhachHang` Int(10),
  `MaNhanVien` Int(10),
  `NgayDat` DATETIME(3),
  `CheckIn` DATETIME(3),
  `CheckOut` DATETIME(3),
  `GiaSan` Double,
  `TongTien` Double,
  `ThanhToan` Varchar(100),
  `GhiChu` Varchat(100),
  `TrangThai` Int,
  `created` DATETIME(3),
  `updated` DATETIME(3),
  FOREIGN KEY (`MaKhachHang`) REFERENCES `KhachHang`(`MaKhachHang`)
);

CREATE TABLE `ChiTietDatSan` (
  `ID` Int(10),
  `MaDatSan` Varchat(10),
  `MaSanPham` Int(10),
  `GiaBan` Double,
  `SoLuong` Int,
  `GhiChu` Varchat(100),
  `TrangThai` Int,
  `created` DATETIME(3),
  `updated` DATETIME(3),
  FOREIGN KEY (`MaDatSan`) REFERENCES `DatSan`(`ID`),
  FOREIGN KEY (`MaSanPham`) REFERENCES `SanPham`(`MaSanPham`)
);

CREATE TABLE `DanhMucChucNang` (
  `MaChucNang` Int(10),
  `TenChucNang` Varchar(100),
  `MoTa` Varchar(255),
  `TrangThai` Int,
  `created` DATETIME(3),
  `updated` DATETIME(3)
);

CREATE TABLE `ChiTietQuyen` (
  `ID` Int(10),
  `MaChucNang` Int(10),
  `MaNhomQuyen` Int(10),
  `HanhDong` Varchar(255),
  `MoTa` Varchar(255),
  `TrangThai` Int,
  `created` DATETIME(3),
  `updated` DATETIME(3),
  FOREIGN KEY (`MaChucNang`) REFERENCES `DanhMucChucNang`(`MaChucNang`),
  FOREIGN KEY (`MaNhomQuyen`) REFERENCES `NhomQuyen`(`MaNhomQuyen`)
);


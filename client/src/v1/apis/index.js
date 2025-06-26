import AccountApi from "./Account.api";
import DanhMucChucNangApi from "./DanhMucChucNang.api";
import KhachHangApi from "./KhachHang.api";
import LoaiSanApi from "./LoaiSan.api";
import LoaiSanPhamApi from "./LoaiSanPham.api";
import NhomQuyenApi from "./NhomQuyen.api";

const SummaryApi = {
  ...AccountApi,
  ...DanhMucChucNangApi,
  ...KhachHangApi,
  ...LoaiSanApi,
  ...LoaiSanPhamApi,
  ...NhomQuyenApi,
};

export default SummaryApi;

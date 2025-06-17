const KhachHangApi = {
  getAllKhachHang: {
    url: "/khach-hang/all",
    method: "get",
  },
  getKhachHangById: {
    url: "/khach-hang/detail",
    method: "get",
  },
  createKhachHang: {
    url: "/khach-hang/create",
    method: "post",
  },
  updateKhachHang: {
    url: "/khach-hang/update",
    method: "put",
  },
  deleteKhachHang: {
    url: "/khach-hang/delete",
    method: "put",
  },
};

export default KhachHangApi;

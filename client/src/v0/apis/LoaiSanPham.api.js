const LoaiSanPhamApi = {
  getAllLoaiSanPham: {
    url: "/loai-san-pham/all",
    method: "get",
  },
  getLoaiSanPhamById: {
    url: "/loai-san-pham/detail",
    method: "get",
  },
  createLoaiSanPham: {
    url: "/loai-san-pham/create",
    method: "post",
  },
  updateLoaiSanPham: {
    url: "/loai-san-pham/update",
    method: "put",
  },
  deleteLoaiSanPham: {
    url: "/loai-san-pham/delete",
    method: "put",
  },
};

export default LoaiSanPhamApi;

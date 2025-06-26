const LoaiSanApi = {
  getAllLoaiSan: {
    url: "/loai-san/all",
    method: "get",
  },
  getLoaiSanById: {
    url: "/loai-san/detail",
    method: "get",
  },
  createLoaiSan: {
    url: "/loai-san/create",
    method: "post",
  },
  updateLoaiSan: {
    url: "/loai-san/update",
    method: "put",
  },
  deleteLoaiSan: {
    url: "/loai-san/delete",
    method: "put",
  },
};

export default LoaiSanApi;

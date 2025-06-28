const DanhMucChucNangApi = {
  getAllDanhMucChucNang: {
    url: "/danh-muc-chuc-nang/all",
    method: "get",
  },
  getDanhMucChucNangById: {
    url: "/danh-muc-chuc-nang/detail",
    method: "get",
  },
  createDanhMucChucNang: {
    url: "/danh-muc-chuc-nang/create",
    method: "post",
  },
  updateDanhMucChucNang: {
    url: "/danh-muc-chuc-nang/update",
    method: "put",
  },
  deleteDanhMucChucNang: {
    url: "/danh-muc-chuc-nang/delete",
    method: "put",
  },
};

export default DanhMucChucNangApi;

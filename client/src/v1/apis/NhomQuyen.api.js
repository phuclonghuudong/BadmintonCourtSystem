const NhomQuyenApi = {
  getAllNhomQuyen: {
    url: "/nhom-quyen/all",
    method: "get",
  },
  getNhomQuyenById: {
    url: "/nhom-quyen/detail",
    method: "get",
  },
  createNhomQuyen: {
    url: "/nhom-quyen/create",
    method: "post",
  },
  updateNhomQuyen: {
    url: "/nhom-quyen/update",
    method: "put",
  },
  deleteNhomQuyen: {
    url: "/nhom-quyen/delete",
    method: "put",
  },
};

export default NhomQuyenApi;

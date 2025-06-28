import { useEffect, useState } from "react";
import DanhMucChucNangApi from "../../apis/DanhMucChucNang.api";
import apiService from "../../services/apiService";
import TableCustomCheckbox from "./TableCustomCheckbox";

const DialogGroupPermission = ({ data, onCancel }) => {
  const [listDMCN, setListDMCN] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllDMCN = async () => {
    try {
      setLoading(true);
      const response = await apiService(
        DanhMucChucNangApi.getAllDanhMucChucNang
      );
      const { data: responseData } = response;

      if (responseData?.ERROR) {
        toast.error(responseData?.MESSAGE);
      }
      if (responseData?.SUCCESS) {
        setListDMCN(responseData?.DATA);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllDMCN();
  }, []);
  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-baseline z-10 transition duration-300 p-5">
      <div className="bg-white rounded-lg p-6 w-200 shadow-lg text-center  ">
        <h2 className="text-lg font-semibold mb-4 uppercase">
          Quyền {data?.TenNhomQuyen}
        </h2>
        {/* <p className="text-gray-700 mb-6">Tên nhóm quyền</p> */}
        <div className="py-4">
          <TableCustomCheckbox
            data={listDMCN}
            onChange={(newData) => {
              console.log("DATA MỚI:", newData);
              setListDMCN(newData);
            }}
          />
        </div>
        <div className="flex justify-between items-baseline gap-3">
          <button className="bg-green-600 text-white px-4 w-full py-2 rounded hover:bg-green-900 transition">
            Cập nhật
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-800 w-full px-4 py-2 rounded hover:bg-gray-500 transition"
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogGroupPermission;

import { useEffect, useState } from "react";
import NhomQuyenApi from "../../apis/NhomQuyen.api";
import ButtonIcon from "../../components/ui/ButtonIcon";
import DialogGroupPermission from "../../components/ui/DialogGroupPermission";
import TableCustom from "../../components/ui/TableCustom";
import Text from "../../components/ui/Text";
import AxiosToastError from "../../services/AxiosToastError";
import apiService from "../../services/apiService";

const GroupPermission = () => {
  const headers = ["Tên nhóm quyền", "Trang thái"];
  const [data, setData] = useState([]);
  const [showDialogData, setShowDialogData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getTrangThai = (status) => {
    if (status === 1) return "Hoạt động";
    if (status === 0) return "Dừng";
    return "Đã xóa";
  };

  const fetchAllNhomQuyen = async () => {
    try {
      setLoading(true);
      const response = await apiService(NhomQuyenApi.getAllNhomQuyen);
      const { data: responseData } = response;

      if (responseData?.ERROR) {
        toast.error(responseData?.MESSAGE);
      }
      if (responseData?.SUCCESS) {
        setData(responseData?.DATA);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllNhomQuyen();
  }, []);
  return (
    <div className="p-2 w-full h-full flex gap-2">
      <div className="w-10/12  flex flex-col gap-2">
        <div className="h-20 bg-white p-2 rounded-md "></div>

        <div className="itemCenter bg-white p-2 flex flex-col h-screen gap-2 rounded-md">
          <div className="flex">
            <Text
              title={"Danh sách nhóm quyền"}
              bold
              uppercase
              size={"text-md"}
            />
          </div>
          <div className="w-full flex-1 overflow-auto">
            <TableCustom
              headers={headers}
              data={data?.map((item) => [
                item.TenNhomQuyen,
                getTrangThai(item.TrangThai),
              ])}
              renderActions={(index) => (
                <div className="flex gap-3">
                  <ButtonIcon
                    icon={"fa-solid fa-eye"}
                    size={"text-lg"}
                    color={"text-blue-800"}
                    title={"Chi tiết"}
                    onClick={() => setShowDialogData(data[index])}
                  />
                  <ButtonIcon
                    icon={"fa-solid fa-user-pen"}
                    size={"text-lg"}
                    color={"text-green-800"}
                    title={"Cập nhật"}
                  />
                  <ButtonIcon
                    icon={"fa-solid fa-trash"}
                    size={"text-lg"}
                    color={"text-red-700"}
                    title={"Xóa"}
                  />
                </div>
              )}
            />
          </div>
        </div>
      </div>

      <div className="w-2/12 bg-white rounded-md">
        <div className=" p-2 itemCenter">
          <Text title={"Quyền"} bold uppercase size={"text-sm"} />
        </div>
      </div>
      {showDialogData && (
        <DialogGroupPermission
          data={showDialogData}
          onCancel={() => setShowDialogData(null)}
        />
      )}
    </div>
  );
};

export default GroupPermission;

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import LoaiSanApi from "../../apis/LoaiSan.api";
import ButtonIcon from "../../components/ui/ButtonIcon";
import TableCustom from "../../components/ui/TableCustom";
import Text from "../../components/ui/Text";
import apiService from "../../services/apiService";
import AxiosToastError from "../../services/AxiosToastError";

const TypeCourt = () => {
  const headers = ["Mã loại", "Tên loại sân", "Trạng thái"];
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  const fetchAllLoaiSan = async () => {
    try {
      setLoading(true);
      const response = await apiService(LoaiSanApi.getAllLoaiSan);
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
    fetchAllLoaiSan();
  }, []);
  return (
    <div className="p-2 w-full h-full flex gap-2">
      <div className="w-8/12  flex flex-col gap-2">
        <div className="h-20 bg-white p-2 rounded-md "></div>

        <div className="itemCenter bg-white p-2 flex flex-col h-screen gap-2 rounded-md">
          <Text title={"Danh sách loại sân"} bold uppercase size={"text-md"} />
          <div className="w-full flex-1 overflow-auto">
            <TableCustom
              headers={headers}
              data={data.map((item) => [
                item.MaLoaiSan,
                item.TenLoaiSan,
                item.TrangThai == 1
                  ? "Hoạt động"
                  : item.TrangThai == 0
                    ? "Dừng"
                    : "Đã xóa",
              ])}
              renderActions={(index) => (
                <div className="flex gap-3">
                  <ButtonIcon
                    icon={"fa-solid fa-eye"}
                    size={"text-lg"}
                    color={"text-blue-800"}
                    title={"Chi tiết"}
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

      <div className="w-4/12 bg-white rounded-md">
        <div className=" p-2 itemCenter">
          <Text
            title={"Danh sách sân thuộc loại"}
            bold
            uppercase
            size={"text-sm"}
          />
        </div>
      </div>
    </div>
  );
};

export default TypeCourt;

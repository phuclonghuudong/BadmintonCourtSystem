import { useEffect, useState } from "react";
import KhachHangApi from "../../apis/KhachHang.api";
import ButtonIcon from "../../components/ui/ButtonIcon";
import DialogCustomer from "../../components/ui/DialogCustomer";
import TableCustom from "../../components/ui/TableCustom";
import Text from "../../components/ui/Text";
import AxiosToastError from "../../services/AxiosToastError";
import apiService from "../../services/apiService";

const Customer = () => {
  const headers = [
    "Họ tên",
    "Email",
    "Điện thoại",
    "CCCD",
    "Địa chỉ",
    "Giới tính",
    "Ngày sinh",
  ];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [dialogMode, setDialogMode] = useState("view");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showDialogCustomer, setShowDialogCustomer] = useState(false);

  const fetchAllKhachHang = async () => {
    try {
      setLoading(true);
      const response = await apiService(KhachHangApi.getAllKhachHang);
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
    fetchAllKhachHang();
  }, []);
  return (
    <div className="p-2 w-full h-full flex gap-2">
      <div className="w-10/12  flex flex-col gap-2">
        <div className="h-20 bg-white p-2 rounded-md "></div>

        <div className="itemCenter bg-white p-2 flex flex-col h-screen gap-2 rounded-md">
          <div className="flex justify-between items-center w-full">
            <div>
              <Text
                title={"Danh sách khách hàng"}
                bold
                uppercase
                size={"text-md"}
              />
            </div>
            <div>
              <ButtonIcon
                icon={"fa-solid fa-plus"}
                size={"text-lg"}
                title="Thêm mới"
                onClick={() => {
                  setDialogMode("create");
                  setShowDialogCustomer(true);
                }}
              />
            </div>
          </div>
          <div className="w-full flex-1 overflow-auto">
            <TableCustom
              headers={headers}
              data={data?.map((item) => [
                item.HoTen,
                item.Email,
                item.SoDienThoai,
                item.CCCD,
                item.DiaChi,
                item.GioiTinh == 1 ? "Nam" : "Nữ",
                item.NgaySinh,
              ])}
              renderActions={(index) => (
                <div className="flex gap-3">
                  <ButtonIcon
                    icon={"fa-solid fa-eye"}
                    size={"text-lg"}
                    color={"text-blue-800"}
                    title={"Chi tiết"}
                    onClick={() => {
                      setDialogMode("view");
                      setSelectedCustomer(data[index]);
                      setShowDialogCustomer(true);
                    }}
                  />
                  <ButtonIcon
                    icon={"fa-solid fa-user-pen"}
                    size={"text-lg"}
                    color={"text-green-800"}
                    title={"Cập nhật"}
                    onClick={() => {
                      setDialogMode("edit");
                      setSelectedCustomer(data[index]);
                      setShowDialogCustomer(true);
                    }}
                  />
                  <ButtonIcon
                    icon={"fa-solid fa-trash"}
                    size={"text-lg"}
                    color={"text-red-700"}
                    title={"Xóa"}
                    onClick={() => {
                      setDialogMode("view");
                      setSelectedCustomer(data[index]);
                      setShowDialogCustomer(true);
                    }}
                  />
                </div>
              )}
            />
          </div>
        </div>
      </div>

      <div className="w-2/12 bg-white rounded-md">
        <div className=" p-2 itemCenter">
          <Text title={"sân đã đặt"} bold uppercase size={"text-sm"} />
        </div>
      </div>

      {showDialogCustomer && (
        <DialogCustomer
          mode={dialogMode}
          customer={selectedCustomer}
          onCancel={() => setShowDialogCustomer(false)}
        />
      )}
    </div>
  );
};

export default Customer;

import { useEffect, useState } from "react";
import FormInput from "./FormInput";

const DialogCustomer = ({ onCancel, mode = "view", customer = {} }) => {
  const isView = mode === "view";
  const isEdit = mode === "edit";
  const isCreate = mode === "create";
  const fontSize = "text-xs sm:text-sx md:text-md";
  const [data, setData] = useState({});

  console.log("customer: ", data);

  const handleOnchange = (event) => {
    const { name, value } = event.target;

    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (mode === "create") {
      setData({});
    } else {
      setData(customer || {});
    }
  }, [customer, mode]);
  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-baseline z-10 transition duration-300 p-5">
      <div className="bg-white rounded-lg p-6 w-200 shadow-lg text-center  ">
        <h2 className="text-lg font-semibold uppercase">
          {isCreate
            ? "Thêm khách hàng"
            : isEdit
              ? "Cập nhật khách hàng"
              : "Thông tin khách hàng"}
        </h2>
        <div className="py-4 max-h-[60vh] overflow-y-auto pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <FormInput
              title={"Họ tên:"}
              name={"HoTen"}
              uppercase
              bold
              size={fontSize}
              value={data?.HoTen || ""}
              onChange={handleOnchange}
              disabled={isView}
            />
            <FormInput
              title={"Email:"}
              name={"Email"}
              uppercase
              bold
              size={fontSize}
              value={data?.Email || ""}
              onChange={handleOnchange}
              disabled={isView}
            />
            <FormInput
              title={"CCCD:"}
              name={"CCCD"}
              uppercase
              bold
              size={fontSize}
              value={data?.CCCD || ""}
              onChange={handleOnchange}
              disabled={isView}
            />
            <FormInput
              title={"Số điện thoại:"}
              name={"SoDienThoai"}
              uppercase
              bold
              size={fontSize}
              value={data?.SoDienThoai || ""}
              onChange={handleOnchange}
              disabled={isView}
            />
            <FormInput
              title={"Địa chỉ:"}
              name={"DiaChi"}
              uppercase
              bold
              size={fontSize}
              value={data?.DiaChi || ""}
              onChange={handleOnchange}
              disabled={isView}
            />
            <FormInput
              title={"Giới tính:"}
              name={"GioiTinh"}
              uppercase
              bold
              size={fontSize}
              value={data?.GioiTinh || ""}
              onChange={handleOnchange}
              disabled={isView}
            />
          </div>
        </div>
        <div className="flex justify-between items-baseline gap-3">
          {isCreate ? (
            <button className="bg-blue-700 text-white px-4 w-full py-2 rounded hover:bg-blue-900 transition">
              Thêm mới
            </button>
          ) : isEdit ? (
            <button className="bg-green-700 text-white px-4 w-full py-2 rounded hover:bg-green-900 transition">
              Cập nhật
            </button>
          ) : (
            <button
              className="bg-yellow-600 text-white px-4 w-full py-2 rounded hover:bg-yellow-800 transition"
              onClick={onCancel}
            >
              Cập nhật
            </button>
          )}

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

export default DialogCustomer;

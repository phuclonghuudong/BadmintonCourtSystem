import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/ui/Button";
import FormDate from "../../components/ui/FormDate";
import FormFile from "../../components/ui/FormFile";
import FormGender from "../../components/ui/FormGender";
import FormInput from "../../components/ui/FormInput";
import Text from "../../components/ui/Text";

const Register = () => {
  const navigate = useNavigate();
  const fontSize = "text-[12px]";
  const [data, setData] = useState({
    Email: "",
    HoTen: "",
    SoDienThoai: "",
    CCCD: "",
    DiaChi: "",
    GioiTinh: "",
    NgaySinh: "",
    Avatar: "",
    TenDangNhap: "",
    MatKhau: "",
    ConfirmPassword: "",
    TrangThai: 2,
  });
  const [loading, setLoading] = useState(false);
  // const validateValue = Object.values(data).every((el) => el);
  const validateValue = Object.entries(data)
    .filter(([key]) => key !== "GioiTinh")
    .every(([_, value]) => value !== "");

  const handleOnchange = (event) => {
    const { name, value } = event.target;

    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const handleRegister = () => {
    if (!validateValue) {
      toast.warning("Vui lòng nhập đủ thông tin.");
      return;
    }
    console.log("DATA Register: ", data);
    // navigate("/login");
  };
  return (
    <section className="flex justify-center items-center min-h-screen lg:px-4 backgroundImageAccount p-4">
      <div className="bg-white/30 backdrop-blur-sm flex flex-col gap-4 w-10/12  p-5 sm:p-10 rounded-lg z-10">
        <div className="text-center space-y-1">
          <Text
            title={"Hệ thống sân cầu lông"}
            bold
            uppercase
            size={"text-xl"}
          />
          {/* <Text title={"Đăng nhập "} bold uppercase size={"text-2xl"} /> */}
        </div>
        <div className="gap-3 px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center">
            <FormInput
              title={"Họ và tên:"}
              name={"HoTen"}
              uppercase
              bold
              value={data?.HoTen}
              onChange={handleOnchange}
              size={fontSize}
              autoFocus
            />
            <FormInput
              title={"Email:"}
              name={"Email"}
              uppercase
              bold
              value={data?.Email}
              onChange={handleOnchange}
              size={fontSize}
            />
            <FormInput
              title={"Tên đăng nhập:"}
              name={"TenDangNhap"}
              uppercase
              bold
              value={data?.TenDangNhap}
              onChange={handleOnchange}
              size={fontSize}
            />
            <FormInput
              title={"Số điện thoại:"}
              name={"SoDienThoai"}
              uppercase
              bold
              value={data?.SoDienThoai}
              onChange={handleOnchange}
              size={fontSize}
            />
            <FormInput
              title={"Căn cước:"}
              name={"CCCD"}
              uppercase
              bold
              value={data?.CCCD}
              onChange={handleOnchange}
              size={fontSize}
            />
            <FormInput
              title={"Địa chỉ:"}
              name={"DiaChi"}
              uppercase
              bold
              value={data?.DiaChi}
              onChange={handleOnchange}
              size={fontSize}
            />

            <FormInput
              title={"Mật khẩu:"}
              name={"MatKhau"}
              type={"password"}
              uppercase
              bold
              value={data?.MatKhau}
              onChange={handleOnchange}
              size={fontSize}
            />
            <FormInput
              title={"Nhập lại mật khẩu:"}
              name={"ConfirmPassword"}
              type={"password"}
              uppercase
              bold
              value={data?.ConfirmPassword}
              onChange={handleOnchange}
              size={fontSize}
            />
            <FormGender
              title="Giới tính"
              name="GioiTinh"
              value={data.GioiTinh}
              onChange={handleOnchange}
              size={fontSize}
              uppercase
              bold
            />
            <FormDate
              title={"Ngày sinh:"}
              name={"NgaySinh"}
              uppercase
              bold
              value={data?.NgaySinh}
              onChange={handleOnchange}
              size={fontSize}
            />
            <FormFile
              title={"Hình đại diện:"}
              name={"Avatar"}
              value={data?.Avatar}
              onChange={handleOnchange}
              size={fontSize}
            />
          </div>
          <div className="pt-6 px-2">
            <Button
              title="Đăng ký"
              bold
              uppercase
              backgroundColor={"bg-green-600"}
              size={fontSize}
              color="text-white"
              onClick={handleRegister}
            />
          </div>
          <div className="p-4 justify-end items-end flex gap-4">
            <Text title="Bạn đã có tài khoản?" bold size="text-sm" />
            <div onClick={() => navigate("/login")}>
              <Text
                title="Đăng nhập"
                uppercase
                bold
                size={fontSize}
                cursor
                color="text-red-900"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

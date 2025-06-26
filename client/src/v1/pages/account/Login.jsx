import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AccountApi from "../../apis/Account.api";
import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";
import LoadingAlert from "../../components/ui/LoadingAlert";
import Text from "../../components/ui/Text";
import apiService from "../../services/apiService";
import { setAccountDetails } from "../../store/AccountSlice";
import fetchAccountDetail from "../../utils/fetchAccountDetail";

const Login = () => {
  const fontSize = "text-[12px]";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    Username: "",
    Password: "",
  });
  const [loading, setLoading] = useState(false);
  const validateValue = Object.values(data).every((el) => el);

  const handleOnchange = (event) => {
    const { name, value } = event.target;

    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const handleLogin = async () => {
    if (!validateValue) {
      alert("Vui lòng nhập đủ thông tin.");
      return;
    }
    try {
      setLoading(true);
      const response = await apiService(AccountApi.loginAccount, {
        data: {
          Username: data.Username,
          Password: data.Password,
        },
      });
      const { data: responseData } = response;
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (responseData?.SUCCESS) {
        toast.success(responseData?.MESSAGE);
        localStorage.setItem("accessToken", responseData?.DATA?.ACCESS_TOKEN);
        const userDetails = await fetchAccountDetail();
        dispatch(setAccountDetails(userDetails?.DATA));

        navigate("/");
      } else {
      }
    } catch (error) {
      console.log(error);
      toast.error("Đăng nhập thất bại. Vui lòng kiểm tra tài khoản/mật khẩu.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="flex justify-center items-center min-h-screen px-4 backgroundImageAccount">
      <div className="bg-white/30 backdrop-blur-sm flex flex-col gap-4 w-full max-w-md sm:max-w-lg md:max-w-xl p-5 sm:p-10 rounded-lg z-10">
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
          <FormInput
            title={"Tên đăng nhập:"}
            name={"Username"}
            uppercase
            bold
            size={fontSize}
            value={data?.Username}
            onChange={handleOnchange}
            autoFocus
          />
          <FormInput
            title={"Mật khẩu:"}
            name={"Password"}
            type={"password"}
            uppercase
            bold
            size={fontSize}
            value={data?.Password}
            onChange={handleOnchange}
          />
          <div className="pt-6 px-2">
            {loading ? (
              <LoadingAlert size="w-12 h-12" />
            ) : (
              <Button
                title="Đăng nhập"
                bold
                uppercase
                backgroundColor={"bg-green-600"}
                size={fontSize}
                color="text-white"
                onClick={handleLogin}
              />
            )}
          </div>
          <div className="p-4 justify-end items-end flex gap-4">
            <Text title="Bạn chưa có tài khoản?" bold size="text-sm" />
            <div onClick={() => navigate("/register")}>
              <Text
                title="Đăng ký"
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

export default Login;

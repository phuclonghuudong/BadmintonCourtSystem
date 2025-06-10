import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";
import Text from "../../components/ui/Text";

const Login = () => {
  const navigate = useNavigate();
  const fontSize = "text-sm sm:text-md md:text-lg";
  const handleLogin = () => {
    navigate("/");
  };
  return (
    <section className="flex justify-center items-center min-h-screen px-4 backgroundImageAccount">
      <div className="bg-white/30 backdrop-blur-sm flex flex-col gap-4 w-full max-w-md sm:max-w-lg md:max-w-xl p-5 sm:p-10 rounded-lg z-10">
        <div className="text-center space-y-1">
          <Text
            title={"Hệ thống sân cầu lông"}
            bold
            uppercase
            size={"text-3xl"}
          />
          {/* <Text title={"Đăng nhập "} bold uppercase size={"text-2xl"} /> */}
        </div>
        <div className="gap-3 px-5">
          <FormInput
            title={"Tên đăng nhập:"}
            name={"txtUsername"}
            uppercase
            bold
            size={fontSize}
          />
          <FormInput
            title={"Mật khẩu:"}
            name={"txtPassword"}
            type={"password"}
            uppercase
            bold
            size={fontSize}
          />
          <div className="pt-6 px-2">
            <Button
              title="Đăng nhập"
              bold
              uppercase
              backgroundColor={"bg-green-600"}
              size={fontSize}
              color="text-white"
              onClick={handleLogin}
            />
          </div>
          <div className="p-4 justify-end items-end flex gap-4">
            <Text title="Bạn chưa có tài khoản?" bold size="text-sm" />
            <div onClick={() => navigate("/register")}>
              <Text
                title="Đăng ký"
                uppercase
                bold
                size="text-sm"
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

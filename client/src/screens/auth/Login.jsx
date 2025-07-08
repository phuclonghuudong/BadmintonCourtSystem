import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/ui/Button";
import FormCheckBox from "../../components/ui/FormCheckBox";
import FormInput from "../../components/ui/FormInput";
import LoadingAlert from "../../components/ui/LoadingAlert";
import tokenApi from "../../constants/tokenApi";
import { addAuth } from "../../redux/reducers/AuthReducer";
import AccountService from "../../services/Account.service";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const handleSubmit = async () => {
    if (!validateValue) return toast.error("Vui lòng điền đầy đủ thông tin!");

    try {
      setLoading(true);

      const response = await AccountService.login(data);
      if (response?.ERROR) return toast.error(response?.MESSAGE);

      const token = response?.DATA?.ACCESS_TOKEN;
      if (!token) return toast.error("Token không hợp lệ");

      if (response?.SUCCESS) {
        toast.success(response?.MESSAGE);

        tokenApi.setAccessToken(token);

        dispatch(addAuth(response?.DATA));
        navigate("/");
      }
    } catch (error) {
      toast.error(error?.MESSAGE);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white/80 backdrop-blur-sm flex flex-col justify-center items-center gap-4 w-full h-full rounded-lg z-10 p-4">
      <div className="w-full max-w-sm h-full flex flex-col justify-center items-center">
        <p className="text-xl uppercase font-bold">Log in to your account</p>
        <p className="text-[10px]">
          Welcome back MOLXIPI! Please enter your details.
        </p>

        <div className="w-full py-5 grid gap-2">
          <FormInput
            autoFocus
            title={"Username"}
            name={"Username"}
            value={data?.Username}
            onChange={handleOnchange}
          />
          <FormInput
            typeInput="password"
            title={"Password"}
            name={"Password"}
            value={data?.Password}
            onChange={handleOnchange}
          />

          <div className="flex justify-between items-center">
            <FormCheckBox />
            <Link
              to={"/verify-email"}
              className="text-orange-600 font-semibold text-[10px]"
            >
              Forgot password
            </Link>
          </div>
          {loading ? (
            <LoadingAlert />
          ) : (
            <Button title={"Sign in"} color={"orange"} onClick={handleSubmit} />
          )}
          <Button
            icon={
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="google-logo"
              />
            }
            title={"Sign up with Google"}
          />
        </div>

        <p className="text-[10px] text-right ">
          Don't have an account?{" "}
          <Link to={"/sign-up"} className="text-orange-600 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

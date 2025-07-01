import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiService from "../../apis/apiService";
import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";
import LoadingAlert from "../../components/ui/LoadingAlert";
import summaryApi from "../../constants/summaryApi";
import { addAuth } from "../../redux/reducers/AuthReducer";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    hoTen: "",
    tenDangNhap: "",
    email: "",
    soDienThoai: "",
    matKhau: "",
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
    try {
      setLoading(true);

      const result = await apiService(summaryApi.signup, { data: data });
      if (result?.ERROR) {
        toast.error(result?.MESSAGE);
      }

      if (result?.SUCCESS) {
        toast.success(result?.MESSAGE);
        dispatch(addAuth(result?.DATA));
        navigate("/");
      }
    } catch (error) {
      toast.error(error?.MESSAGE || error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white/80 backdrop-blur-sm flex flex-col justify-center items-center gap-4 w-full h-full rounded-lg z-10 p-4">
      <div className="w-full max-w-sm h-full flex flex-col justify-center items-center ">
        <p className="text-xl uppercase font-bold">Create an account</p>
        <p className="text-[10px]">Start your 30-day free trial.</p>

        <div className="w-full py-5 grid gap-2 ">
          <FormInput
            autoFocus
            title={"First and last name*"}
            name={"hoTen"}
            value={data?.hoTen}
            onChange={handleOnchange}
          />

          <FormInput
            title={"Email*"}
            name={"email"}
            value={data?.email}
            onChange={handleOnchange}
          />

          <FormInput
            title={"Phone*"}
            name={"soDienThoai"}
            value={data?.soDienThoai}
            onChange={handleOnchange}
          />

          <FormInput
            title={"Username*"}
            name={"tenDangNhap"}
            value={data?.tenDangNhap}
            onChange={handleOnchange}
          />

          <FormInput
            typeInput="password"
            title={"Password*"}
            name={"matKhau"}
            value={data?.matKhau}
            onChange={handleOnchange}
          />
          <div className="h-2"></div>

          {loading ? (
            <LoadingAlert />
          ) : (
            <Button
              title={"Get started"}
              color="orange"
              onClick={handleSubmit}
            />
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

        <p className="text-[10px]">
          Already have an account?{" "}
          <Link to={"/login"} className="text-orange-600 font-semibold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";

const ResetPassword = () => {
  const [data, setData] = useState({
    matKhau: "",
    nhapLaiMatKhau: "",
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
  return (
    <div className="bg-white/80 backdrop-blur-sm flex flex-col justify-center items-center gap-4 w-full h-full rounded-lg z-10 p-4">
      <div className="w-full max-w-sm h-full flex flex-col justify-center items-center">
        <p className="text-xl uppercase font-bold">Reset Password</p>
        <p className="text-[10px]">
          Welcome back MOLXIPI! Please enter your details.
        </p>

        <div className="w-full py-5 grid gap-2">
          <FormInput
            autoFocus
            typeInput="password"
            title={"Password"}
            name={"matKhau"}
            value={data?.matKhau}
            onChange={handleOnchange}
          />
          <FormInput
            typeInput="password"
            title={"Confirm Password"}
            name={"nhapLaiMatKhau"}
            value={data?.nhapLaiMatKhau}
            onChange={handleOnchange}
          />

          <div className="flex justify-end">
            <p className={"text-[10px] pr-2"}>Already have an account? </p>
            <Link
              to={"/"}
              className="text-orange-600 font-semibold text-[10px]"
            >
              Login
            </Link>
          </div>

          <Button title={"Confirm"} color={"orange"} />
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

export default ResetPassword;

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";
import { AccountService } from "../../services";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    matKhau: "",
    confirmMatKhau: "",
    email: location?.state?.Email,
  });
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

  useEffect(() => {
    if (!location?.state?.Email) {
      toast.error("KHÔNG CÓ THÔNG TIN!");
      navigate("/verify-otp");
    }
  }, []);

  const handleResetPassword = async () => {
    if (!validateValue) return toast.error("Vui lòng nhập đầy đủ thông tin!!");

    try {
      setIsLoading(true);
      const result = await AccountService.reset_password(data);
      if (result?.ERROR) return toast.error(result?.MESSAGE);

      if (result?.SUCCESS) {
        toast.success(result?.MESSAGE);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error?.MESSAGE || error);
    } finally {
      setIsLoading(false);
    }
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
            name={"confirmMatKhau"}
            value={data?.confirmMatKhau}
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

          <Button
            title={"Reset Password"}
            color={"orange"}
            onClick={handleResetPassword}
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

export default ResetPassword;

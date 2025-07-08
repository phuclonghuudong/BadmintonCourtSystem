import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";
import LoadingAlert from "../../components/ui/LoadingAlert";
import { AccountService } from "../../services";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    Email: "",
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
    if (!validateValue) return toast.error("Vui lòng nhập đầy đủ thông tin!!");
    try {
      setLoading(true);

      const result = await AccountService.verify_email(data);
      if (result?.ERROR) {
        toast.error(result?.MESSAGE);
      }

      if (result?.SUCCESS) {
        toast.success(result?.MESSAGE);
        navigate("/verify-otp", { state: data });
      }
    } catch (error) {
      toast.error(error?.MESSAGE || error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white/80 backdrop-blur-sm flex flex-col justify-center items-center gap-4 w-full h-full rounded-lg z-10 p-4">
      <div className="w-full max-w-sm h-full flex flex-col justify-center items-center">
        <p className="text-xl uppercase font-bold">Email Verification</p>
        <p className="text-[10px]">
          Welcome back MOLXIPI! Please enter your details.
        </p>

        <div className="w-full py-5 grid gap-2">
          <FormInput
            autoFocus
            title={"Email"}
            name={"Email"}
            value={data?.Email}
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

          {loading ? (
            <LoadingAlert />
          ) : (
            <Button
              title={"Confirm Email"}
              color={"orange"}
              onClick={handleSubmit}
            />
          )}
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

export default VerifyEmail;

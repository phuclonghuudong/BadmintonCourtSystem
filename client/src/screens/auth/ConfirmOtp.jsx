import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";
const ConfirmOtp = () => {
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
    navigate("/reset-password");
  };
  return (
    <div className="bg-white/80 backdrop-blur-sm flex flex-col justify-center items-center gap-4 w-full h-full rounded-lg z-10 p-4">
      <div className="w-full max-w-sm h-full flex flex-col justify-center items-center">
        <p className="text-xl uppercase font-bold">OTP Authentication</p>
        <p className="text-[10px]">
          Welcome back MOLXIPI! Please enter your details.
        </p>

        <div className="w-full py-5 grid gap-2">
          <FormInput
            autoFocus
            title={"OTP"}
            name={"Email"}
            value={data?.Email}
            onChange={handleOnchange}
          />

          <div className="flex justify-end">
            <p className={"text-[10px] pr-2"}>Resend verification code! </p>
            <Link
              to={"/confirm-email"}
              className="text-orange-600 font-semibold text-[10px]"
            >
              Verify Email
            </Link>
          </div>

          <Button
            title={"Confirmation"}
            color={"orange"}
            onClick={handleSubmit}
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

export default ConfirmOtp;

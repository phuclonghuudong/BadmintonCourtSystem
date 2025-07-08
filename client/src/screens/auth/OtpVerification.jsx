import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/ui/Button";
import OTPInput from "../../components/ui/OTPInput";
import { AccountService } from "../../services";

const OtpVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(["", "", "", "", "", ""]);
  const inputRef = useRef([]);
  const [loading, setLoading] = useState(false);
  const validateValue = Object.values(data).every((el) => el);

  useEffect(() => {
    if (!location?.state?.Email) {
      toast.error("KHÔNG CÓ THÔNG TIN!");
      navigate("/verify-email");
    }
  }, []);

  const handleSubmit = async () => {
    if (!validateValue) return toast.error("Vui lòng nhập đầy đủ mã OTP!");
    try {
      setLoading(true);

      const result = await AccountService.otp_verification({
        Otp: data.join(""),
        Email: location?.state?.Email,
      });
      if (result?.ERROR) return toast.error(result?.MESSAGE);

      if (result?.SUCCESS) {
        toast.success(result?.MESSAGE);
        navigate("/reset-password", {
          state: { Email: location?.state?.Email },
        });
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
        <p className="text-xl uppercase font-bold">OTP Verification</p>
        <p className="text-[10px]">
          Welcome back MOLXIPI! Please enter your details.
        </p>

        <div className="w-full py-5 grid gap-2">
          <OTPInput data={data} setData={setData} inputRef={inputRef} />

          <div className="flex justify-end">
            <p className={"text-[10px] pr-2"}>Resend verification code! </p>
            <Link
              to={"/verify-email"}
              className="text-orange-600 font-semibold text-[10px]"
            >
              Verify Email
            </Link>
          </div>

          <Button
            title={"Verify OTP"}
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

export default OtpVerification;

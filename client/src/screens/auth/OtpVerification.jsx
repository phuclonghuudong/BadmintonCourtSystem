import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";

const OtpVerification = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(["", "", "", "", "", ""]);
  const inputRef = useRef([]);
  const [loading, setLoading] = useState(false);
  const validateValue = Object.values(data).every((el) => el);

  const handleSubmit = async () => {
    navigate("/reset-password");
  };
  return (
    <div className="bg-white/80 backdrop-blur-sm flex flex-col justify-center items-center gap-4 w-full h-full rounded-lg z-10 p-4">
      <div className="w-full max-w-sm h-full flex flex-col justify-center items-center">
        <p className="text-xl uppercase font-bold">OTP Verification</p>
        <p className="text-[10px]">
          Welcome back MOLXIPI! Please enter your details.
        </p>

        <div className="w-full py-5 grid gap-2">
          <div className="flex items-center gap-3 justify-between">
            {data.map((e, index) => {
              return (
                <input
                  key={"opt" + index}
                  ref={(ref) => {
                    inputRef.current[index] = ref;
                    return ref;
                  }}
                  type="text"
                  maxLength={1}
                  value={data[index]}
                  onChange={(e) => {
                    const value = e.target.value;

                    const newData = [...data];
                    newData[index] = value;
                    setData(newData);

                    if (value && index < 5) {
                      inputRef.current[index + 1].focus();
                    }
                  }}
                  id="otp"
                  className="text-center bg-blue-50 w-full max-w-16 p-2 border-none rounded outline-none focus:border-orange-200 font-semibold"
                />
              );
            })}
          </div>

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

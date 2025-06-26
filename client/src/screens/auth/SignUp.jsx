import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";

const SignUp = () => {
  const [data, setData] = useState({
    Username: "",
    Email: "",
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
  return (
    <div className="bg-white/80 backdrop-blur-sm flex flex-col justify-center items-center gap-4 w-full h-full rounded-lg z-10 p-4">
      <div className="w-full max-w-sm h-full flex flex-col justify-center items-center ">
        <p className="text-xl uppercase font-bold">Create an account</p>
        <p className="text-[10px]">Start your 30-day free trial.</p>

        <div className="w-full py-5 grid gap-2 ">
          <FormInput
            autoFocus
            title={"Name*"}
            name={"Username"}
            value={data?.Username}
            onChange={handleOnchange}
          />

          <FormInput
            title={"Email*"}
            name={"Email"}
            value={data?.Email}
            onChange={handleOnchange}
          />
          <FormInput
            typeInput="password"
            title={"Password*"}
            name={"Password"}
            value={data?.Password}
            onChange={handleOnchange}
          />
          <div class="h-2"></div>

          <Button title={"Get started"} color="orange" />
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
          <Link to={"/"} className="text-orange-600 font-semibold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

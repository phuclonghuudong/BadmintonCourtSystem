import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConfirmEmail from "../screens/auth/ConfirmEmail";
import ConfirmOtp from "../screens/auth/ConfirmOtp";
import Login from "../screens/auth/Login";
import ResetPassword from "../screens/auth/ResetPassword";
import SignUp from "../screens/auth/SignUp";

const AuthRouter = () => {
  return (
    <div className="min-h-screen p-4 flex justify-between items-center backgroundImageAccount">
      <div className="md:w-6/12 block"></div>
      <div className="md:w-6/12 w-full h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/confirm-email" element={<ConfirmEmail />} />
            <Route path="/verify-otp" element={<ConfirmOtp />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default AuthRouter;

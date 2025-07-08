import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/auth/Login";
import OtpVerification from "../screens/auth/OtpVerification";
import ResetPassword from "../screens/auth/ResetPassword";
import SignUp from "../screens/auth/SignUp";
import VerifyEmail from "../screens/auth/VerifyEmail";

const AuthRouter = () => {
  return (
    <div className="min-h-screen p-4 flex justify-between items-center backgroundImageAccount">
      <div className="md:w-6/12 block"></div>
      <div className="md:w-6/12 w-full h-full">
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/verify-otp" element={<OtpVerification />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default AuthRouter;

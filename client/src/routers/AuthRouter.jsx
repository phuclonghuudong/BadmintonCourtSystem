import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/auth/Login";
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
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default AuthRouter;

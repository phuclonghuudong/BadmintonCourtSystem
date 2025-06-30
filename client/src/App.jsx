import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routers from "./routers/Routers";

export const App = () => {
  return (
    <>
      <Routers />
      <ToastContainer
        position="top-right text-[12px]"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
};

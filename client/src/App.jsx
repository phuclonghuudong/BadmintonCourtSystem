import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store";
import Routers from "./routers/Routers";

export const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

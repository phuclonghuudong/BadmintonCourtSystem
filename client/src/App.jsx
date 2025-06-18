import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loading } from "./components/ui/Loading";
import { Router } from "./general/Router";
import { setAccountDetails } from "./store/AccountSlice";
import fetchAccountDetail from "./utils/fetchAccountDetail";

export const PageWithHeader = ({ children }) => (
  <div className="flex h-full flex-col">{children}</div>
);

export const App = () => {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.userAccount);

  const fetchUser = async () => {
    const response = await fetchAccountDetail();
    if (response?.SUCCESS) {
      dispatch(setAccountDetails(response?.DATA));
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <PageWithHeader>
            <Loading name="suspense" />
          </PageWithHeader>
        }
      >
        <Router />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Suspense>
    </BrowserRouter>
  );
};

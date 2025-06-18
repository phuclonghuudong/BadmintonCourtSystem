import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AccountApi from "../../apis/Account.api";
import LoadingAlert from "../../components/ui/LoadingAlert";
import apiService from "../../services/apiService";
import AxiosToastError from "../../services/AxiosToastError";
import { logoutAccount } from "../../store/AccountSlice";

const DialogLogout = ({ onConfirm, onCancel }) => {
  const account = useSelector((state) => state.userAccount.account);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);
      const response = await apiService(AccountApi.logoutAccount);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (response?.data?.SUCCESS) {
        dispatch(logoutAccount());
        toast.success(response?.data?.MESSAGE);
        localStorage.clear();
        navigate("/login");
        onCancel();
      } else {
        toast.error(response?.data?.MESSAGE);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-10 transition duration-300 p-5">
      {account ? (
        <div className="bg-white rounded-lg p-6 w-80 shadow-lg text-center  ">
          <h2 className="text-lg font-semibold mb-4">Xác nhận đăng xuất</h2>
          <p className="text-gray-700 mb-6">Bạn có chắc muốn đăng xuất?</p>
          <div className="flex justify-around">
            {loading ? (
              <LoadingAlert size="w-12 h-12" />
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Đăng xuất
              </button>
            )}
            <button
              onClick={onCancel}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              Hủy
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg p-6 w-80 shadow-lg text-center  ">
          <h2 className="text-lg font-semibold mb-4">Xác nhận thông tin</h2>
          <p className="text-gray-700 mb-6">Bạn chưa đăng nhập vào hệ thống!</p>
          <div className="flex justify-around">
            {loading ? (
              <LoadingAlert size="w-12 h-12" />
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Đăng nhập
              </button>
            )}
            <button
              onClick={onCancel}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              Hủy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DialogLogout;

import { useNavigate } from "react-router-dom";

const DialogLogout = ({ onConfirm, onCancel }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
    console.log("Đã đăng xuất");
    onCancel();
  };
  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-10 transition duration-300 p-5">
      <div className="bg-white rounded-lg p-6 w-80 shadow-lg text-center  ">
        <h2 className="text-lg font-semibold mb-4">Xác nhận đăng xuất</h2>
        <p className="text-gray-700 mb-6">Bạn có chắc muốn đăng xuất?</p>
        <div className="flex justify-around">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Đăng xuất
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogLogout;

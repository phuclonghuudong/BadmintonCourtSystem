const DialogInfo = ({ onCancel }) => {
  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-10 transition duration-300">
      <div className="bg-white rounded-lg p-6 w-100 shadow-lg text-center  ">
        <h2 className="text-lg font-semibold mb-4">Thông tin tài khoản</h2>
        <p className="text-gray-700 mb-6">Tên người dùng</p>
        <div className="flex justify-around">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Cập nhật
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

export default DialogInfo;

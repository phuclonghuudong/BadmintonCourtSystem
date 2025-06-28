const TableCustomCheckbox = ({ data = [], onChange }) => {
  const handleCheckboxChange = (chucNangIndex, quyenType) => {
    const newData = [...data];
    const item = newData[chucNangIndex];

    if (!item.ChiTietQuyen) item.ChiTietQuyen = [];

    const index = item.ChiTietQuyen.findIndex((q) => q.LoaiQuyen === quyenType);

    if (index > -1) {
      // Nếu đã có, thì toggle
      item.ChiTietQuyen[index].TrangThai =
        item.ChiTietQuyen[index].TrangThai === 1 ? 0 : 1;
    } else {
      // Nếu chưa có, thêm mới
      item.ChiTietQuyen.push({
        LoaiQuyen: quyenType,
        TrangThai: 1,
      });
    }

    if (onChange) onChange(newData);
  };

  const isChecked = (item, quyenType) => {
    const quyen = item.ChiTietQuyen?.find((q) => q.LoaiQuyen === quyenType);
    return quyen?.TrangThai === 1;
  };
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border border-gray-300 text-xs">
        <thead className="bg-gray-100  text-center">
          <tr>
            <th className="px-4 py-2 border border-gray-300 w-[370px]">
              Danh mục
            </th>
            <th className="px-4 py-2 border border-gray-300 ">View</th>
            <th className="px-4 py-2 border border-gray-300">Create</th>
            <th className="px-4 py-2 border border-gray-300 ">Update</th>
            <th className="px-4 py-2 border border-gray-300 ">Delete</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) &&
            data?.map((item, index) => {
              return (
                <tr key={item.MaChucNang}>
                  <td className="px-4 py-2 border border-gray-300 text-left font-semibold">
                    {item.TenChucNang}
                  </td>
                  {["VIEW", "CREATE", "UPDATE", "DELETE"].map((quyenType) => (
                    <td
                      key={quyenType}
                      className="px-4 py-2 border border-gray-300 text-center"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked(item, quyenType)}
                        onChange={() => handleCheckboxChange(index, quyenType)}
                      />
                    </td>
                  ))}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TableCustomCheckbox;

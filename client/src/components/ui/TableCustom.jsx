const TableCustom = ({ headers = [], data = [], renderActions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border border-gray-300 text-xs">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2 border border-gray-300 w-[50px]">STT</th>
            {headers.map((header, index) => (
              <th className="px-4 py-2 border border-gray-300 " key={index}>
                {header}
              </th>
            ))}
            {renderActions && (
              <th className="px-4 py-2 border border-gray-300 w-30">
                Thao tác
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={headers.length + (renderActions ? 1 : 0)}
                className="text-center py-4 text-gray-500"
              >
                Không có dữ liệu
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">
                  {rowIndex + 1}
                </td>
                {headers.map((_, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-2 border border-gray-300"
                  >
                    {row[colIndex]}
                  </td>
                ))}
                {renderActions && (
                  <td className="px-4 py-2 border border-gray-300 ">
                    {renderActions(rowIndex)}
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableCustom;

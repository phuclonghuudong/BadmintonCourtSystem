import ButtonIcon from "../../components/ui/ButtonIcon";
import TableCustom from "../../components/ui/TableCustom";
import Text from "../../components/ui/Text";

const Customer = () => {
  const headers = ["Tên khách hàng"];
  const data = [["ADMIN"], ["Nguyễn Văn A"], ["b"]];
  return (
    <div className="p-2 w-full h-full flex gap-2">
      <div className="w-8/12  flex flex-col gap-2">
        <div className="h-20 bg-white p-2 rounded-md "></div>

        <div className="itemCenter bg-white p-2 flex flex-col h-screen gap-2 rounded-md">
          <div className="flex">
            <Text
              title={"Danh sách khách hàng"}
              bold
              uppercase
              size={"text-md"}
            />
          </div>
          <div className="w-full flex-1 overflow-auto">
            <TableCustom
              headers={headers}
              data={data}
              renderActions={(index) => (
                <div className="flex gap-3">
                  <ButtonIcon
                    icon={"fa-solid fa-eye"}
                    size={"text-lg"}
                    color={"text-blue-800"}
                    title={"Chi tiết"}
                  />
                  <ButtonIcon
                    icon={"fa-solid fa-user-pen"}
                    size={"text-lg"}
                    color={"text-green-800"}
                    title={"Cập nhật"}
                  />
                  <ButtonIcon
                    icon={"fa-solid fa-trash"}
                    size={"text-lg"}
                    color={"text-red-700"}
                    title={"Xóa"}
                  />
                </div>
              )}
            />
          </div>
        </div>
      </div>

      <div className="w-4/12 bg-white rounded-md">
        <div className=" p-2 itemCenter">
          <Text title={"sân đã đặt"} bold uppercase size={"text-sm"} />
        </div>
      </div>
    </div>
  );
};

export default Customer;

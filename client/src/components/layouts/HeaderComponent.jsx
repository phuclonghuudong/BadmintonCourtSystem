import { FaBell } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import IconComponent from "../ui/IconComponent";

const HeaderComponent = () => {
  return (
    <header className="h-[50px] px-2 py-1 bg-gray-50">
      <div className="flex justify-between items-center h-full w-full bg-white rounded shadow-sm px-4">
        <div className="flex items-center space-x-2"></div>

        <div className="flex">
          <IconComponent
            icon={FaBell}
            size={24}
            color="gray"
            title="Thông báo"
          />
          <IconComponent
            icon={IoMdLogOut}
            size={24}
            color="red"
            title="Đăng xuất"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;

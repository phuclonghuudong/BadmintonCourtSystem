import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ICON from "../../assets/iconUser.png";
import { getRouteList } from "../../general/RoutePaths";
import DialogInfo from "../ui/DialogInfo";
import DialogLogout from "../ui/DialogLogout";
import IconInfo from "../ui/IconInfo";
import TitleInfo from "../ui/TitleInfo";

const MenuTaskbar = () => {
  const routeList = getRouteList();
  const navigate = useNavigate();
  const location = useLocation();
  const [showDialogLogout, setShowDialogLogout] = useState(false);
  const [showDialogInfo, setShowDialogInfo] = useState(false);

  const menuItems = routeList?.filter(
    (route) => route?.layout === "AdminLayout"
  );

  return (
    <div className="backgroundColorMenuTaskbar flex flex-col h-screen">
      <div className="h-20 flex border-b-2 ">
        <div
          className="w-2/6 p-1 cursor-pointer"
          onClick={() => setShowDialogInfo(true)}
        >
          <IconInfo icon={ICON} />
        </div>
        <div className="w-4/6 p-2 flex flex-col justify-between">
          <TitleInfo title={"Admin"} color="red" size={"text-sm"} />
          <TitleInfo
            title={"Quản trị hệ thống"}
            bold
            color="text-red-800"
            size={"text-sm"}
          />
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        {menuItems.map((item) => {
          return (
            <div
              key={item?.path}
              className={`p-2 itemStart h-10 menuTaskbar cursor-pointer ${location?.pathname == item?.path ? "bg-amber-100" : ""}`}
              onClick={() => navigate(item?.path)}
            >
              <TitleInfo title={item?.label} uppercase bold size={"text-sm"} />
            </div>
          );
        })}
      </div>

      <div className="bg-amber-100 h-10  ">
        <div
          className="p-2 itemCenter h-full menuTaskbar"
          onClick={() => setShowDialogLogout(true)}
        >
          <TitleInfo
            title={"Đăng xuất"}
            uppercase
            bold
            color="red"
            size={"text-sm"}
          />
        </div>
      </div>

      {showDialogLogout && (
        <DialogLogout onCancel={() => setShowDialogLogout(false)} />
      )}
      {showDialogInfo && (
        <DialogInfo onCancel={() => setShowDialogInfo(false)} />
      )}
    </div>
  );
};

export default MenuTaskbar;

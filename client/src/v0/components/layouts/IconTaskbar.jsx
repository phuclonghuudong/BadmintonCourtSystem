import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ICON from "../../assets/iconUser.png";
import { getRouteList } from "../../general/RoutePaths";
import ButtonIcon from "../ui/ButtonIcon";
import DialogInfo from "../ui/DialogInfo";
import DialogLogout from "../ui/DialogLogout";
import IconInfo from "../ui/IconInfo";

const IconTaskbar = () => {
  const routeList = getRouteList();
  const navigate = useNavigate();
  const location = useLocation();
  const [showDialogLogout, setShowDialogLogout] = useState(false);
  const [showDialogInfo, setShowDialogInfo] = useState(false);

  const menuItems = routeList.filter(
    (route) => route?.layout === "AdminLayout"
  );

  return (
    <div className="backgroundColorMenuTaskbar flex flex-col h-screen">
      <div
        className="p-1 cursor-pointer h-12 border-b-2"
        onClick={() => setShowDialogInfo(true)}
      >
        <IconInfo icon={ICON} />
      </div>
      <div className="flex-1 overflow-auto gap-2">
        {menuItems.map((item) => {
          return (
            <div
              key={item?.path}
              className={`itemTop p-2 ${location?.pathname == item?.path ? "bg-amber-100" : ""}`}
            >
              <ButtonIcon
                icon={item?.icon}
                size={"text-2xl"}
                color={"text-gray-700"}
                title={item?.label}
                onClick={() => navigate(item?.path)}
              />
            </div>
          );
        })}
      </div>

      <div className="h-10 border-t-2 itemCenter">
        <ButtonIcon
          icon={"fa-solid fa-right-from-bracket"}
          size={"text-xl"}
          color={"text-red-700"}
          title={"Đăng xuất"}
          onClick={() => setShowDialogLogout(true)}
        />
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

export default IconTaskbar;

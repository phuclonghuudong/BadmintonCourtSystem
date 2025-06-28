import { useState } from "react";
import ButtonIcon from "../ui/ButtonIcon";
import DialogLogout from "../ui/DialogLogout";

const Header = ({ onClickMenu }) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <header className="backgroundHeader h-12 p-2 flex justify-between gap-4">
      <div className="w-screen  itemStart">
        <ButtonIcon
          icon={"fa-solid fa-bars"}
          size={"text-2xl"}
          color={"text-gray-800"}
          title={"Menu"}
          onClick={onClickMenu}
        />
      </div>
      <div className="w-fit flex gap-4">
        <ButtonIcon
          icon={"fa-solid fa-bell"}
          size={"text-2xl"}
          color={"text-green-800"}
          title={"Thông báo"}
        />
        <ButtonIcon
          icon={"fa-solid fa-right-from-bracket"}
          size={"text-2xl"}
          color={"text-red-700"}
          title={"Đăng xuất"}
          onClick={() => setShowDialog(true)}
        />
      </div>
      {showDialog && <DialogLogout onCancel={() => setShowDialog(false)} />}
    </header>
  );
};

export default Header;

import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaHome, FaUsersCog } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { PiCourtBasketballFill } from "react-icons/pi";
import { SiProtonvpn } from "react-icons/si";
import { TbBrandBitbucketFilled } from "react-icons/tb";
import ICON from "../../assets/icons-badminton.png";
import TextMenuTaskbar from "../ui/TextMenuTaskbar";

const SiderBarComponent = () => {
  return (
    <div className="">
      <div className="h-[50px] flex justify-start items-center w-full px-2">
        <img src={ICON} alt="icon" className="w-10 h-10" />
        <p className="font-bold">MolXiPi </p>
      </div>

      <div className="">
        <TextMenuTaskbar path={"/"} title={"Trang chủ"} icon={FaHome} />
        <TextMenuTaskbar
          path="/category"
          title={"Loại Sản phẩm"}
          icon={BiSolidCategoryAlt}
        />
        <TextMenuTaskbar
          path={"/type"}
          title={"Loại Sân"}
          icon={TbBrandBitbucketFilled}
        />
        <TextMenuTaskbar
          path={"/customer"}
          title={"Khách hàng"}
          icon={FaUsersCog}
        />
        <TextMenuTaskbar
          path={"/personnel"}
          title={"Nhân viên"}
          icon={FaPeopleRoof}
        />
        <TextMenuTaskbar
          path={"/product"}
          title={"Sản phẩm"}
          icon={SiProtonvpn}
        />
        <TextMenuTaskbar
          path={"/yard"}
          title={"Sân"}
          icon={PiCourtBasketballFill}
        />
      </div>
    </div>
  );
};

export default SiderBarComponent;

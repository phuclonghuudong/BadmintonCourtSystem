import { Link } from "react-router-dom";

const TextMenuTaskbar = ({ title, icon: ICON, size, bold, path }) => {
  const textBold = bold ? "font-bold" : "";
  const iconSize = size ? size : 25;
  return (
    <Link
      to={path}
      className={`${textBold}  flex justify-start gap-2 items-center text-sm uppercase font-bold p-3 hover:bg-amber-100 duration-300 cursor-pointer hover:text-black`}
    >
      <ICON size={iconSize} />
      <p>{title || ""}</p>
    </Link>
  );
};

export default TextMenuTaskbar;

const Button = ({ title, icon: ICON, color = "white" }) => {
  const fontSize = "text-[10px] font-semibold";
  const colorClasses = {
    white: "bg-white hover:bg-gray-300 text-black",
    orange: "bg-orange-500 hover:bg-orange-700 text-white",
    blue: "bg-blue-500 hover:bg-blue-700 text-white",
    green: "bg-green-500 hover:bg-green-700 text-white",
    red: "bg-red-500 hover:bg-red-700 text-white",
    gray: "bg-gray-200 hover:bg-gray-300 text-black",
  };
  const buttonColor = colorClasses[color];

  return (
    <div className="w-full h-full py-1 ">
      <button
        className={`${fontSize} ${buttonColor} w-full h-8 rounded-sm cursor-pointer `}
      >
        <div className="flex justify-center items-center h-full w-full gap-2">
          {ICON || ""}
          {title ? title : ""}
        </div>
      </button>
    </div>
  );
};

export default Button;

const Button = ({
  title,
  bold,
  uppercase,
  backgroundColor,
  color,
  size,
  name,
  onClick,
}) => {
  let btnTitle = title ? title : "NO NAME";
  let btnBold = bold ? "font-bold" : "";
  let btnUppercase = uppercase ? "uppercase" : "";
  let btnBackgroundColor = backgroundColor ? backgroundColor : "";
  let btnColor = color ? color : "";
  let btnSize = size ? size : "";
  let btnName = name ? name : "btnNoName";

  const shiftTailwindColor = (className, shift = 200) => {
    const match = className.match(/(.*-)(\d{2,3})$/);
    if (!match) return className;
    const prefix = match[1];
    const oldValue = parseInt(match[2]);
    const newValue = Math.min(900, Math.max(50, oldValue + shift));
    return `${prefix}${newValue}`;
  };
  const hoverBackgroundColor = shiftTailwindColor(btnBackgroundColor, 200);

  return (
    <button
      className={`w-full rounded-sm cursor-pointer p-3 ${btnBold} ${btnUppercase} ${btnSize} ${btnColor} ${btnBackgroundColor} hover:${hoverBackgroundColor}`}
      name={btnName}
      onClick={onClick}
    >
      {btnTitle}
    </button>
  );
};

export default Button;

const Text = ({ title, bold, color, uppercase, size, cursor }) => {
  let titleInfo = title ? title : "";
  let fontColor = color ? color : "";
  let fontBold = bold ? "font-bold" : "";
  let fontUppercase = uppercase ? "uppercase" : "";
  let sizeText = size ? size : "";
  let cursorText = cursor ? "cursor-pointer" : "";

  return (
    <p
      className={`${fontBold} ${fontUppercase} ${fontColor} ${sizeText} ${cursorText} overflow-hidden whitespace-nowrap truncate font-times`}
    >
      {titleInfo}
    </p>
  );
};

export default Text;

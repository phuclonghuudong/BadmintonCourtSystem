const Text = ({ title, bold, color, uppercase, size }) => {
  let titleInfo = title ? title : "";
  let fontColor = color ? color : "";
  let fontBold = bold ? "font-bold" : "";
  let fontUppercase = uppercase ? "uppercase" : "";
  let sizeText = size ? size : "";

  return (
    <p
      className={`${fontBold} ${fontUppercase} ${fontColor} ${sizeText} overflow-hidden whitespace-nowrap truncate font-times`}
    >
      {titleInfo}
    </p>
  );
};

export default Text;

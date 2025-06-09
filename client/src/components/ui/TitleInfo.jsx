const TitleInfo = ({ title, bold, color, uppercase, size }) => {
  let titleInfo = title ? title : "";
  let fontColor = color ? color : "";
  let fontBold = bold ? "font-bold" : "";
  let fontUppercase = uppercase ? "uppercase" : "";
  let sizeText = size ? size : "";

  return (
    <div className=" h-full flex justify-items-start items-center">
      <p
        className={`${fontBold} ${fontUppercase} ${fontColor} ${sizeText} overflow-hidden whitespace-nowrap truncate font-times`}
      >
        {titleInfo}
      </p>
    </div>
  );
};

export default TitleInfo;

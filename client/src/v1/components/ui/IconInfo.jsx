const IconInfo = ({ icon }) => {
  let imageIcon = icon ? icon : "";
  return (
    <img
      src={imageIcon}
      alt={`icon ${imageIcon}`}
      className="w-full h-full object-scale-down"
    />
  );
};

export default IconInfo;

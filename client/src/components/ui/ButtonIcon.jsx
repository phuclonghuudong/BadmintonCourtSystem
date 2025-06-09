const ButtonIcon = ({ icon, color, size, title, onClick }) => {
  let iconButton = icon ? icon : "";
  let colorText = color ? color : "";
  let sizeText = size ? size : "text-xs";
  let titleButton = title ? title : "";
  return (
    <button
      className="itemCenter cursor-pointer"
      title={titleButton}
      onClick={onClick}
    >
      <i
        className={`${iconButton} ${sizeText} ${colorText} transition duration-300 hover:text-black`}
      ></i>
    </button>
  );
};

export default ButtonIcon;

// logout: "fa-solid fa-right-from-bracket"
// close: "fa-solid fa-xmark"
// delete: "fa-solid fa-trash"
// edit: "fa-solid fa-pen-to-square"
// edit-user: "fa-solid fa-user-pen"
// edit-pen: "fa-solid fa-pen"
// word: "fa-solid fa-file-word"
// bell: "fa-solid fa-bell" -- cái chuông
// circle: "fa-solid fa-circle-exclamation"
// circle: "fa-solid fa-triangle-exclamation"
// menu: "fa-solid fa-bars"
// eye: "fa-solid fa-eye"

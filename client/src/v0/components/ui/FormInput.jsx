import { useState } from "react";

const FormInput = ({
  title,
  name,
  type,
  size,
  color,
  uppercase,
  bold,
  onChange,
  value,
  disabled,
  autoFocus,
}) => {
  const [showEye, setShowEye] = useState(false);
  let txtTitle = title ? title : "";
  let txtName = name ? name : "noneName";
  let txtType = type ? type : "text";
  let txtSize = size ? size : "";
  let txtColor = color ? color : "";
  let txtUppercase = uppercase ? "uppercase" : "";
  let txtBold = bold ? "font-bold" : "";
  let txtValue = value ? value : "";

  return (
    <div
      className={`flex flex-col w-full h-full items-start gap-2 p-2 ${txtSize}`}
    >
      <label
        htmlFor={txtName}
        className={`${txtUppercase} ${txtBold} ${txtColor}`}
      >
        {txtTitle}
      </label>
      {type === "password" ? (
        <div className="bg-blue-50 p-2 w-full h-full rounded-sm border-none focus:outline-none flex justify-between items-center gap-2">
          <input
            type={showEye ? "text" : txtType}
            id={txtName}
            name={txtName}
            onChange={onChange}
            value={txtValue}
            className=" w-full border-none focus:outline-none"
            disabled={disabled ? true : false}
          />
          <span
            className="text-sm cursor-pointer"
            onClick={() => setShowEye((pre) => !pre)}
          >
            {showEye ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i className="fa-solid fa-eye-slash"></i>
            )}
          </span>
        </div>
      ) : (
        <input
          autoFocus={autoFocus ? true : false}
          type={txtType}
          id={txtName}
          name={txtName}
          onChange={onChange}
          value={txtValue}
          className="bg-blue-50 p-2 w-full rounded-sm border-none focus:outline-none "
          disabled={disabled ? true : false}
        />
      )}
    </div>
  );
};

export default FormInput;

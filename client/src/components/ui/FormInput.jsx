const FormInput = ({
  title,
  name,
  type,
  size,
  color,
  uppercase,
  bold,
  onChange,
}) => {
  let txtTitle = title ? title : "";
  let txtName = name ? name : "noneName";
  let txtType = type ? type : "text";
  let txtSize = size ? size : "";
  let txtColor = color ? color : "";
  let txtUppercase = uppercase ? "uppercase" : "";
  let txtBold = bold ? "font-bold" : "";

  return (
    <div className={`flex flex-col items-start gap-2 p-2 ${txtSize}`}>
      <label
        htmlFor={txtName}
        className={`${txtUppercase} ${txtBold} ${txtColor}`}
      >
        {txtTitle}
      </label>
      <input
        type={txtType}
        id={txtName}
        name={txtName}
        onChange={onChange}
        className="bg-blue-50 p-2 w-full rounded-sm border-none focus:outline-none "
      />
    </div>
  );
};

export default FormInput;

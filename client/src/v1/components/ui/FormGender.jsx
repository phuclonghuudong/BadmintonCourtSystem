const FormGender = ({
  title = "",
  name = "gender",
  size = "",
  color = "",
  uppercase = false,
  bold = false,
  onChange,
  value,
  disabled = false,
}) => {
  return (
    <div
      className={`flex flex-col w-full h-full items-start gap-2 p-2 ${size}`}
    >
      <label
        htmlFor={name}
        className={`${uppercase ? "uppercase" : ""} ${bold ? "font-bold" : ""} ${color}`}
      >
        {title}
      </label>

      <div className="flex justify-start items-center gap-5 h-full ">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id={`${name}_nam`}
            name={name}
            value="1"
            checked={value !== "" && parseInt(value) === 1}
            onChange={(e) =>
              onChange({ target: { name, value: parseInt(e.target.value) } })
            }
            disabled={disabled}
          />
          <label htmlFor={`${name}_nam`} className="uppercase font-bold">
            Nam
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="radio"
            id={`${name}_nu`}
            name={name}
            value="0"
            checked={value !== "" && parseInt(value) === 0}
            onChange={(e) =>
              onChange({ target: { name, value: parseInt(e.target.value) } })
            }
            disabled={disabled}
          />
          <label htmlFor={`${name}_nu`} className="uppercase font-bold">
            Nữ
          </label>
        </div>
      </div>
    </div>
  );
};

export default FormGender;

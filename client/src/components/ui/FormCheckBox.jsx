const FormCheckBox = () => {
  const fontSize = "text-[10px]";
  return (
    <div
      className={`flex justify-between items-center gap-2 cursor-pointer ${fontSize}`}
    >
      <input
        id="checkBox"
        type="checkbox"
        className="outline-none cursor-pointer border border-gray-200 border-opacity-50 accent-orange-500 "
      />
      <label htmlFor="checkBox" className="cursor-pointer">
        Remember 30 days
      </label>
    </div>
  );
};

export default FormCheckBox;

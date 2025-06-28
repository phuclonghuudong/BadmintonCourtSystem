import { useState } from "react";
import uploadImage from "../../utils/uploadImage";

const FormFile = ({
  title,
  name,
  size,
  color,
  uppercase,
  bold,
  onChange,
  value,
  disabled,
}) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(value);
  let txtTitle = title ? title : "";
  let txtName = name ? name : "noneName";
  let txtSize = size ? size : "";
  let txtColor = color ? color : "";
  let txtUppercase = uppercase ? "uppercase" : "";
  let txtBold = bold ? "font-bold" : "";

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    console.log("handleUploadImage: ", file);
    if (!file) return;

    setLoading(true);
    const response = await uploadImage(file);

    const { data: ImageResponse } = response;
    console.log(object);

    setLoading(false);

    setImage(ImageResponse.data.url);
  };

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

      <div className="flex justify-between items-center gap-3">
        <div className="flex items-center justify-center">
          {image ? (
            <img
              alt="category"
              src={image}
              className="w-full h-full object-scale-down"
            />
          ) : (
            <span className="w-full">Không có hình ảnh</span>
          )}
        </div>

        <label htmlFor="uploadCategoryImage" className="flex">
          <div
            className={`
                      border-none border-orange-500 bg-orange-100 hover:bg-orange-500 
                   p-2 rounded cursor-pointer font-medium `}
          >
            {loading ? "Đang tải ảnh..." : "Chọn ảnh"}
          </div>
          <input
            onChange={handleUploadImage}
            type="file"
            accept="image/*"
            id="uploadCategoryImage"
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default FormFile;

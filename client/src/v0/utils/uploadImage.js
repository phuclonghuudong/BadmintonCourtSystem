import UploadApi from "../apis/Upload.api";
import apiService from "../services/apiService";

const uploadImage = async (image) => {
  try {
    const formData = new FormData();
    formData.append("image", image);

    const response = await apiService(UploadApi.uploadImage, {
      data: formData,
    });

    return response;
  } catch (error) {
    return error;
  }
};

export default uploadImage;

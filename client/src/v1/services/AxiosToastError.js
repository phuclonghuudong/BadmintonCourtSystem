import { toast } from "react-toastify";

const AxiosToastError = (error) => {
  toast.error(
    error?.response?.data?.MESSAGE
      ? error?.response?.data?.MESSAGE
      : error?.message
  );
};

export default AxiosToastError;

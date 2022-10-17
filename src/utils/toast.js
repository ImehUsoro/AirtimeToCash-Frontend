import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SuccessToast = (message, delay) => {
  toast.configure();
  toast.success(message, {
    position: "top-right",
    autoClose: delay || 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
};
export const ErrorToast = (message) => {
  toast.configure();
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
};

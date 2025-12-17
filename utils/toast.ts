import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SuccessToast = (message) => {
  toast.success(message, {
    position: "top-right", // You can change to "bottom-right", "top-center", etc.
    autoClose: 3000,       // Time in ms before it disappears
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",   
  });
};

export const ErrorToast = (message) => {
  toast.error(message, {
    position: "top-right", // You can change to "bottom-right", "top-center", etc.
    autoClose: 3000,       // Time in ms before it disappears
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",   
  });
};

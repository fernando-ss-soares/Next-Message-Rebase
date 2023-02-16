import toast from "react-hot-toast";

const notifySucess = (messageToast: string) =>
  toast.success(`${messageToast}`, {
    duration: 1000,
    position: "top-right",
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
setTimeout(() => {}, 2000);

const notifyError = (messageToast: string) =>
  toast.error(`${messageToast}`, {
    duration: 1000,
    position: "top-right",
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
setTimeout(() => {}, 2000);

export const Alert = {
  notifySucess,
  notifyError,
};

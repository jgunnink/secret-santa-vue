import Vue from "vue";

const SUCCESS_TOAST_CONFIG = { position: "top-right", duration: 3000 };
const ERROR_TOAST_CONFIG = { position: "top-right", duration: 3000 };
const WARNING_TOAST_CONFIG = { position: "top-right", duration: 3000 };

export const showSuccessToast = (msg: string, config: object = SUCCESS_TOAST_CONFIG) => {
  (Vue as any).toasted.success(msg, SUCCESS_TOAST_CONFIG);
};

export const showErrorToast = (msg: string, config: object = ERROR_TOAST_CONFIG) => {
  (Vue as any).toasted.error(msg, ERROR_TOAST_CONFIG);
};

export const showInfoToast = (msg: string, config: object = WARNING_TOAST_CONFIG) => {
  (Vue as any).toasted.info(msg, WARNING_TOAST_CONFIG);
};

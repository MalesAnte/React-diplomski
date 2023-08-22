import i18n from 'i18next';
import { toast } from 'react-toastify';

export const toastFunc = (description, type) => {
  if (type === 'success') {
    toast.success(i18n.t(description), {
      autoClose: 2000,
      closeOnClick: true,
      hideProgressBar: false,
      pauseOnHover: true,
      position: 'bottom-left',
    });
  }
  if (type === 'error') {
    toast.error(i18n.t(description), {
      autoClose: 2000,
      closeOnClick: true,
      hideProgressBar: false,
      pauseOnHover: true,
      position: 'bottom-left',
    });
  }
  if (type === 'warn') {
    toast.warn(i18n.t(description), {
      autoClose: 2000,
      closeOnClick: true,
      hideProgressBar: false,
      pauseOnHover: true,
      position: 'bottom-left',
    });
  }
  if (type === 'info') {
    toast.info(i18n.t(description), {
      autoClose: 2000,
      closeOnClick: true,
      hideProgressBar: false,
      pauseOnHover: true,
      position: 'bottom-left',
    });
  }
};

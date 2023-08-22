import axios from 'axios';

import { authHeader } from '../util/authUtil.js';
import { toastFunc } from '../util/toast';

const API =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_API_URL_DEV
    : import.meta.env.VITE_API_URL_PROD;

export const getFunc = async (url) => {
  return axios
    .get(`${API}/${url}`, {
      headers: {
        ...authHeader(),
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return toastFunc(error.message, 'error');
    });
};

export const postFunc = async (url, body) => {
  return axios
    .post(`${API}/${url}`, body, {
      headers: {
        ...authHeader(),
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const putFunc = async (url, body) => {
  return axios
    .put(`${API}/${url}`, body, {
      headers: {
        ...authHeader(),
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
export const delFunc = async (url) => {
  return axios
    .delete(`${API}/${url}`, {
      headers: {
        ...authHeader(),
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return toastFunc(error.message, 'error');
    });
};

export const downloadFunc = async (url, body) => {
  return axios
    .post(`${API}/${url}`, body, {
      headers: {
        ...authHeader(),
      },
    })
    .then((response) => {
      function getName(str) {
        return str.split('=')[1];
      }

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        getName(response.headers['content-disposition'])
      ); //or any other extension
      document.body.appendChild(link);
      link.click();
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const autoComFuncGet = async (search, url) => {
  return await axios
    .get(
      `${API}/${url}${'?search='}${search}`,

      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return toastFunc(error.message, 'error');
    });
};

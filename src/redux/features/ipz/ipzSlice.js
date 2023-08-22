import { createSlice } from '@reduxjs/toolkit';

import {
  postFunc,
  getFunc,
  putFunc,
  delFunc,
} from '../../../services/mainApiServices.jsx';
import { toastFunc } from '../../../util/toast.js';

const initialState = {
  data: { items: [] },
  loading: 'idle',
  oneIpz: null,
  personDetails: null,
  printData: null,
};

export const ipzReducer = createSlice({
  initialState,
  name: 'ipz',
  reducers: {
    clearIpz: (state) => {
      return {
        ...state,
        data: {
          items: [],
        },
        loading: 'succeeded',
        oneIpz: null,
        personDetails: null,
      };
    },
    deleteIpz: (state, action) => {
      const filteredItems = state.data.items.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        data: {
          ...state.data,
          items: filteredItems,
        },
        loading: 'succeeded',
      };
    },

    setIpz: (state, action) => {
      state.data = action.payload;
      state.loading = 'succeeded';
    },
    setOneIpz: (state, action) => {
      state.oneIpz = action.payload;
      state.loading = 'succeeded';
    },
    setPersonIpzDetails: (state, action) => {
      state.personDetails = action.payload;
      state.loading = 'succeeded';
    },

    setUpdateIpz: (state, action) => {
      return {
        ...state,
        data: {
          ...state.data,
          items: state?.data?.items?.map((item) => {
            if (item?.id === action.payload?.id) {
              return { ...action.payload };
            }
            return item;
          }),
        },
        loading: 'succeeded',
      };
    },
  },
});

export const getIpz = (body) => async (dispatch) => {
  const response = await postFunc('ipz/paginate', body);
  if (response?.status === 200) {
    dispatch(setIpz(response?.data?.data));

    return toastFunc(response?.data?.message, 'success');
  } else {
    return toastFunc(response?.data?.message, 'error');
  }
};
export const createIpz = (body, setOpen, filterData) => async (dispatch) => {
  const response = await postFunc('ipz', body);
  if (response?.status === 200) {
    dispatch(getIpz(filterData));
    setOpen(false);

    return toastFunc(response?.data?.message, 'success');
  } else {
    return toastFunc(response?.data?.message, 'error');
  }
};
export const getPersonDetailsForIpz = (id) => async (dispatch) => {
  const response = await getFunc(`persons/getOneDetailsForIpz/${id}`);
  if (response?.status === 200) {
    dispatch(setPersonIpzDetails(response.data.data));
    return toastFunc(response?.data?.message, 'success');
  } else {
    return toastFunc(response?.data?.message, 'error');
  }
};

export const getOneIpz =
  (id, handleOpenIpz, setPerson, type) => async (dispatch) => {
    const response = await getFunc(`ipz/${id}`);

    if (response?.status === 200) {
      if (type === 'print') {
        dispatch(setPrintData(response.data.data));
      } else {
        dispatch(setOneIpz(response.data.data));
        setPerson({
          label: `${response?.data?.data?.person_details.firstname} ${response?.data?.data?.person_details.lastname}`,
          value: response?.data?.data?.person_id,
        });
        handleOpenIpz();
      }
      return toastFunc(response?.data?.message, 'success');
    } else {
      return toastFunc(response?.data?.message, 'error');
    }
  };

export const editIpz = (id, body, setOpen) => async (dispatch) => {
  const response = await putFunc(`ipz/${id}`, body);
  if (response?.status === 200) {
    dispatch(setUpdateIpz(response?.data?.data));
    setOpen(false);

    return toastFunc(response?.data?.message, 'success');
  } else {
    return toastFunc(response?.data?.message, 'error');
  }
};

export const deleteOneIpz = (id) => async (dispatch) => {
  const response = await delFunc(`ipz/${id}`);
  if (response?.status === 200) {
    dispatch(deleteIpz(response?.data?.data));

    return toastFunc(response?.data?.message, 'success');
  } else {
    return toastFunc(response?.data?.message, 'error');
  }
};

export const clearIpzState = () => async (dispatch) => {
  dispatch(clearIpz());
};

// Action creators are generated for each case reducer function
export const {
  setPersonIpzDetails,
  setUpdateIpz,
  clearIpz,
  setIpz,
  setOneIpz,
  deleteIpz,
  clearIpzLight,
} = ipzReducer.actions;
export const ipz = (state) => state.ipz;
export default ipzReducer.reducer;

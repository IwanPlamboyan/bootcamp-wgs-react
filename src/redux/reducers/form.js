import { GET_DATA_FORM, SET_DATA_FORM, DELETE_DATA_FORM, UPDATE_DATA_FORM } from '../types/form';

// buat state awal untuk aplikasi form
const initialState = {
  getDataFormResult: false,
  getDataFormLoading: false,
  getDataFormError: false,

  setDataFormResult: false,
  setDataFormLoading: false,
  setDataFormError: false,

  deleteDataFormResult: false,
  deleteDataFormLoading: false,
  deleteDataFormError: false,

  updateDataFormResult: false,
  updateDataFormLoading: false,
  updateDataFormError: false,
};

// buat reducer dengan dengan argument ke 1 yang berisi state yang kita buat dan action
const reducer = (state = initialState, action) => {
  // pengkondisian berdasarkan type action
  switch (action.type) {
    case GET_DATA_FORM:
      return {
        ...state,
        getDataFormResult: action.payload.data,
        getDataFormLoading: action.payload.loading,
        getDataFormError: action.payload.errorMessage,
      };
    case SET_DATA_FORM:
      return {
        ...state,
        setDataFormResult: action.payload.data,
        setDataFormLoading: action.payload.loading,
        setDataFormError: action.payload.errorMessage,
      };
    case DELETE_DATA_FORM:
      return {
        ...state,
        deleteDataFormResult: action.payload.data,
        deleteDataFormLoading: action.payload.loading,
        deleteDataFormError: action.payload.errorMessage,
      };
    case UPDATE_DATA_FORM:
      return {
        ...state,
        updateDataFormResult: action.payload.data,
        updateDataFormLoading: action.payload.loading,
        updateDataFormError: action.payload.errorMessage,
      };
    default:
      // selain dari type action yang diatas kembalikan statenya
      return state;
  }
};

export default reducer;

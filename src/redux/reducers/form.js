import { SET_DATA_FORM } from '../types/form';

// buat state awal untuk aplikasi form
const initialState = {
  setDataFormResult: false,
  setDataFormLoading: false,
  setDataFormError: false,
};

// buat reducer dengan dengan argument ke 1 yang berisi state yang kita buat dan action
const reducer = (state = initialState, action) => {
  // pengkondisian berdasarkan type action
  switch (action.type) {
    case SET_DATA_FORM:
      return {
        ...state,
        setDataFormResult: action.payload.data,
        setDataFormLoading: action.payload.loading,
        setDataFormError: action.payload.errorMessage,
      };
    default:
      // selain dari type action yang diatas kembalikan statenya
      return state;
  }
};

export default reducer;

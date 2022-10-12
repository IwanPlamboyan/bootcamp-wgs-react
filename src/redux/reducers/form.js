import { SET_DATA_FORM } from '../types/form';

// buat state awal untuk aplikasi form
const initialState = {
  employed: '',
  firtName: '',
  lastName: '',
  education: '',
  expertise: [],
  preferred: '',
  notes: '',
};

// buat reducer dengan dengan argument ke 1 yang berisi state yang kita buat dan action
const reducer = (state = initialState, action) => {
  // pengkondisian berdasarkan type action
  switch (action.type) {
    case SET_DATA_FORM:
      return {
        ...state,
        firtName: action.data.firtName,
        lastName: action.data.lastName,
        education: action.data.education,
        expertise: action.data.expertise,
        preferred: action.data.preferred,
        notes: action.data.notes,
      };
    default:
      // selain dari type action yang diatas kembalikan statenya
      return state;
  }
};

export default reducer;

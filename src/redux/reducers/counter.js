import { INCREMENT, DECREMENT, RESET } from '../types/counter';

// buat state awal untuk aplikasi counting
const initialState = {
  value: 0,
};

// buat reducer dengan dengan argument ke 1 yang berisi state yang kita buat dan action
const reducer = (state = initialState, action) => {
  // pengkondisian berdasarkan type action
  switch (action.type) {
    case INCREMENT:
      // jika type action INCREMENT maka state ditambah 1
      return { value: state.value + 1 };
    case DECREMENT:
      // jika type action DECREMENT maka state dikurang 1
      return { value: state.value - 1 };
    case RESET:
      // jika type action RESET maka state akan ditetapkan menjadi 0
      return { value: 0 };
    default:
      // selain dari type action yang diatas kembalikan statenya
      return state;
  }
};

export default reducer;

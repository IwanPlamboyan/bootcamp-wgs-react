// import type counter yang berisi variabel atau kontanta
import { INCREMENT, DECREMENT, RESET } from '../types/counter';

// buat beberapa action atau function yang berisi object dari type counter

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const reset = () => ({
  type: RESET,
});

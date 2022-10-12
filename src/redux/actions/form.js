// import type counter yang berisi variabel atau kontanta
import { SET_DATA_FORM } from '../types/form';

// buat action atau function yang berisi object dari type form

export const setDataForm = (data) => ({
  type: SET_DATA_FORM,
  data: data,
});

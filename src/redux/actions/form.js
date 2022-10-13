// import type counter yang berisi variabel atau kontanta
import axios from 'axios';
import { SET_DATA_FORM } from '../types/form';

// buat action atau function yang berisi object dari type form
export const setDataForm = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATA_FORM,
      // jika sedang loading kirim data ke reducer berdasarkan loading
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // post API
    axios({
      method: 'POST',
      url: 'http://localhost:3004/biodata',
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        // jika data berhasil kirim data ke reducer
        dispatch({
          type: SET_DATA_FORM,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // jika data gagal kirim data ke reducer
        dispatch({
          type: SET_DATA_FORM,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

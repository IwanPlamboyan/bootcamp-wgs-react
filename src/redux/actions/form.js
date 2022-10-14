// import type counter yang berisi variabel atau kontanta
import axios from 'axios';
import { GET_DATA_FORM, SET_DATA_FORM, DELETE_DATA_FORM, UPDATE_DATA_FORM } from '../types/form';

// buat action atau function yang berisi object dari type form untuk mendapatkan data-data form
export const getDataForm = () => {
  return (dispatch) => {
    dispatch({
      type: GET_DATA_FORM,
      // jika sedang loading kirim data ke reducer berdasarkan loading
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // post API
    axios({
      method: 'GET',
      url: 'http://localhost:3004/biodata',
      timeout: 120000,
    })
      .then((response) => {
        // jika data berhasil kirim data ke reducer
        dispatch({
          type: GET_DATA_FORM,
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
          type: GET_DATA_FORM,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

// buat action atau function yang berisi object dari type form untuk menambahkan data form
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

// buat action atau function yang berisi object dari type form untuk menghapus data form
export const deleteDataForm = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_DATA_FORM,
      // jika sedang loading kirim data ke reducer berdasarkan loading
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // post API
    axios({
      method: 'DELETE',
      url: `http://localhost:3004/biodata/${id}`,
      timeout: 120000,
    })
      .then((response) => {
        // jika data berhasil kirim data ke reducer
        dispatch({
          type: DELETE_DATA_FORM,
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
          type: DELETE_DATA_FORM,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
// buat action atau function yang berisi object dari type form untuk mengubah data form
export const updateDataForm = (data) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_DATA_FORM,
      // jika sedang loading kirim data ke reducer berdasarkan loading
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // post API
    axios({
      method: 'PUT',
      url: `http://localhost:3004/biodata/${data.id}`,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        // jika data berhasil kirim data ke reducer
        dispatch({
          type: UPDATE_DATA_FORM,
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
          type: UPDATE_DATA_FORM,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

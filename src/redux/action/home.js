const {default: Axios} = require('axios');
const {API_HOST} = require('../../config');

export const getProgramData = () => dispatch => {
  Axios.get(`${API_HOST.url}/program`)
    .then(result => {
      // console.log('Sukses :', result.data.data.data);
      dispatch({type: 'SET_PROGRAM_PILIHAN', value: result.data.data.data});
    })
    .catch(err => {
      console.log('err :', err);
    });
};

export const getProgramByTyeps = types => dispatch => {
  Axios.get(`${API_HOST.url}/program?types=${types}`)
    .then(result => {
      // console.log('Sukses :', result.data.data.data);
      if (types === 'program_pilihan') {
        dispatch({type: 'SET_PROGRAM_PILIHAN', value: result.data.data.data});
      }

      if (types === 'banyak_diminati') {
        dispatch({type: 'SET_BANYAK_DIMINATI', value: result.data.data.data});
      }

      if (types === 'program_baru') {
        dispatch({type: 'SET_PROGRAM_BARU', value: result.data.data.data});
      }
    })
    .catch(err => {
      console.log('err :', err);
    });
};

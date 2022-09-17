const {default: Axios} = require('axios');
const {API_HOST} = require('../../config');

export const getProgramData = () => dispatch => {
  Axios.get(`${API_HOST.url}/program`)
    .then(result => {
      // console.log('Sukses :', result.data.data.data);
      dispatch({type: 'SET_PROGRAM', value: result.data.data.data});
    })
    .catch(err => {
      console.log('err :', err);
    });
};

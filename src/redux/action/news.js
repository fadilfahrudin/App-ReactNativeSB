const {default: Axios} = require('axios');
const {API_HOST} = require('../../config');

export const getNews = program_id => dispatch => {
  Axios.get(`${API_HOST.url}/news?program_id=${program_id}`)
    .then(result => {
      // console.log('Sukses NEWS:', result.data.data.data);
      dispatch({type: 'SET_NEWS', value: result.data.data.data});
    })
    .catch(err => {
      console.log('err :', err);
    });
};

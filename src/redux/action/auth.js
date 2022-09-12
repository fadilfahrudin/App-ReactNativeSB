import Axios from 'axios';
import {showMessage} from '../../utils';
import {setLoading} from '../../redux/action/global';

const API_HOST = {
  url: 'http://10.0.2.2:8000/api',
};

export const signUpAction = (dataRegister, navigation) => dispatch => {
  Axios.post(`${API_HOST.url}/register`, dataRegister)
    .then(result => {
      console.log('data: ', result.data);
      dispatch(setLoading(false));
      showMessage('Selamat pendaftaran sukses', 'success');
      navigation.replace('MainApp');
    })
    .catch(err => {
      console.log('pesan error :', err.response.data.data);
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.data?.message);
    });
};

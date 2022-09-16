import Axios from 'axios';
import {showMessage, storeData} from '../../utils';
import {setLoading} from '../../redux/action/global';
import {API_HOST} from '../../config';

export const signUpAction = (dataRegister, navigation) => dispatch => {
  Axios.post(`${API_HOST.url}/register`, dataRegister)
    .then(result => {
      // console.log('data: ', result.data);
      const token = `${result.data.data.token_type} ${result.data.data.access_token}`;
      const userProfile = result.data.data.user;

      storeData('token', {value: token});
      storeData('userProfile', userProfile);

      dispatch(setLoading(false));
      showMessage('Selamat pendaftaran sukses', 'success');
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      // console.log('pesan error :', err.response.data.data);
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.data?.message);
    });
};

export const signInAction = (form, navigation) => dispatch => {
  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/login`, form)
    .then(result => {
      const token = `${result.data.data.token_type} ${result.data.data.access_token}`;
      const userProfile = result.data.data.user;

      dispatch(setLoading(false));
      storeData('token', {value: token});
      storeData('userProfile', userProfile);
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      console.log('success', result);
    })
    .catch(err => {
      console.log('error', err.response.data);
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.data?.message);
    });
};

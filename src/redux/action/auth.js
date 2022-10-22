import Axios from 'axios';
import {getData, showMessage, storeData} from '../../utils';
import {setLoading} from '../../redux/action/global';
import {API_HOST} from '../../config';
import {useEffect} from 'react';

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

export const uploadPhotoAction = (dataImage, userProfile) => dispatch => {
  const profile = userProfile;

  getData('token').then(resToken => {
    const photoForUpload = new FormData();
    photoForUpload.append('file', dataImage);

    Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
      headers: {
        Authorization: resToken.value,
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(result => {
        // console.log('hasil upload', result.data.data[0]);
        profile.profile_photo_url = `http://10.0.2.2:8000/storage/${result.data.data[0]}`;
        storeData('userProfile', profile);
        console.log('user profile', profile);
      })
      .catch(err => {
        showMessage(err?.response?.data?.data?.message);
      });
  });
};

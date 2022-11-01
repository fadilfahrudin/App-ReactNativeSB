import Axios from 'axios';
import {API_HOST} from '../../config';
import {getData} from '../../utils';

export const getOrders = () => dispatch => {
  getData('token').then(resToken => {
    Axios.get(`${API_HOST.url}/transaction`, {
      headers: {
        Authorization: resToken.value,
      },
    })
      .then(res => {
        // console.log('get orders: ', res.data);
        dispatch({type: 'SET_ORDER', value: res.data.data.data});
      })
      .catch(err => {
        console.log('error: ', err);
      });
  });
};

export const getOrderHistory = () => dispatch => {
  getData('token').then(resToken => {
    Axios.get(`${API_HOST.url}/transaction?status=pending`, {
      headers: {
        Authorization: resToken.value,
      },
    })
      .then(res => {
        // console.log('get order history: ', res.data.data.data);
        dispatch({type: 'SET_ORDER_HISTORY', value: res.data.data.data});
      })
      .catch(err => {
        console.log('error order history: ', err);
      });
  });
};

export const getSuccessDonasi = () => dispatch => {
  getData('token').then(resToken => {
    Axios.get(`${API_HOST.url}/transaction?status=success`, {
      headers: {
        Authorization: resToken.value,
      },
    })
      .then(res => {
        // console.log('get success donasi: ', res.data.data.data);
        dispatch({type: 'SET_ORDER_SUCCESS', value: res.data.data.data});
      })
      .catch(err => {
        console.log('error order success: ', err);
      });
  });
};

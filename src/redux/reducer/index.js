import {combineReducers} from 'redux';
import {registerReducer, photoReducer} from './auth';
import {globalReducer} from './global';
import {homeReducer} from './home';
import {orderReducer} from './order';
import {newsReducer} from './news';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  homeReducer,
  orderReducer,
  photoReducer,
  newsReducer,
});

export default reducer;

import {combineReducers} from 'redux';
import {registerReducer} from './auth';
import {globalReducer} from './global';
import {homeReducer} from './home';

const reducer = combineReducers({registerReducer, globalReducer, homeReducer});

export default reducer;

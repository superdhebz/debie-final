// index.js

import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from '../actions/authReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer
});
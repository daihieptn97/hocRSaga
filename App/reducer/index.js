import {combineReducers} from 'redux';
import counterReducer from './counterReducer';

const reducerCounter = combineReducers({
    count: counterReducer,
});


export default reducerCounter;

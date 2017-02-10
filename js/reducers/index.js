import { combineReducers } from 'redux';
import dataReducer from './data';

const rootReducer = combineReducers({
	dataFromAPI: dataReducer
});

export default rootReducer;

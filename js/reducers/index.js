import { combineReducers } from 'redux';
import dataReducer from './data';
import addReducer from './add';

const rootReducer = combineReducers({
	dataFromAPI: dataReducer,
	add: addReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import dataReducer from './data';
import addReducer from './add';
import { reducer as formRedecer } from 'redux-form';

const rootReducer = combineReducers({
	dataFromAPI: dataReducer,
	add: addReducer,
	form: formRedecer
});

export default rootReducer;

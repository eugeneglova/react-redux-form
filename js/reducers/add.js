import {
	ADD_ITEM_PENDING,
	ADD_ITEM_FULFILLED,
	ADD_ITEM_REJECTED
} from '../constants/ActionTypes';

const reducer = (state = {}, action) => {
	if (action.type === ADD_ITEM_PENDING) {
		return {...state,
			loading: true
		};
	} else if (action.type === ADD_ITEM_FULFILLED) {
		return {...state,
			loading: false,
			response: action.payload.data
		};
	} else if (action.type === ADD_ITEM_REJECTED) {
		return {...state,
			loading: false,
			response: {}
		};
	}
	return state;
};

export default reducer;

import {
	CHANGE_ADD_ITEM,
	ADD_ITEM_PENDING,
	ADD_ITEM_FULFILLED,
	ADD_ITEM_REJECTED
} from '../constants/ActionTypes';

const reducer = (state = {}, action) => {
	if (action.type === CHANGE_ADD_ITEM) {
		let data = {
			[action.payload.key]: action.payload.value
		};
		return {...state,
			data: {...state.data, ...data}
		};
	} else if (action.type === ADD_ITEM_PENDING) {
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

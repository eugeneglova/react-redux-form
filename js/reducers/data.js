import {
	FETCH_PENDING,
	FETCH_FULFILLED,
	FETCH_REJECTED
} from '../constants/ActionTypes';

const reducer = (state = {}, action) => {
	if (action.type === FETCH_PENDING) {
		return {...state,
			loading: true
		};
	} else if (action.type === FETCH_FULFILLED) {
		return {...state,
			loading: false,
			response: action.payload.data
		};
	} else if (action.type === FETCH_REJECTED) {
		return {...state,
			loading: false,
			response: {}
		};
	}
	return state;
};

export default reducer;

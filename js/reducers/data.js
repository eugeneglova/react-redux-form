import {
	FETCH_PENDING,
	FETCH_FULFILLED,
	FETCH_REJECTED,
	CHANGE_LIST_ITEM
} from '../constants/ActionTypes';

const reducer = (state = {}, action) => {
	if (action.type === CHANGE_LIST_ITEM) {
		let data = {
			[action.payload.key]: action.payload.value
		};
		let rd = state.response.data.slice();
		rd[action.payload.index] = {...state.response.data[action.payload.index], ...data};
		return {...state,
			response: {...state.response,
				data: rd
			}
		};
	} else if (action.type === FETCH_PENDING) {
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

import {
	FETCH_PENDING,
	FETCH_FULFILLED,
	FETCH_REJECTED,
	CHANGE_ITEM,
	CHANGE_FILTER_FULFILLED
} from '../constants/ActionTypes';

const reducer = (state = {}, action) => {
	if (action.type === CHANGE_ITEM) {
		if (action.payload.index == null) return state;
		let data = {};
		data[action.payload.key] = action.payload.value;
		let rd = state.response.data.slice();
		rd[action.payload.index] = {...state.response.data[action.payload.index], ...data};
		return {...state,
			response: {...state.response,
				data: rd
			}
		};
	} else if (action.type === CHANGE_FILTER_FULFILLED) {
		let filter = {};
		filter[action.payload.key] = action.payload.value;
		return {...state,
			filter: {...state.filter,
				...filter
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

import {
	FETCH_PENDING,
	FETCH_FULFILLED,
	FETCH_REJECTED
} from '../constants/ActionTypes';
import keyBy from 'lodash/keyBy';

const reducer = (state = {}, action) => {
	if (action.type === FETCH_PENDING) {
		return {...state,
			loading: true
		};
	} else if (action.type === FETCH_FULFILLED) {
		const data = action.payload.data.data.map(item => (
			{...item,
				minAmount: item.amount,
				maxAmount: item.amount
			}
		));
		const response = {...action.payload.data,
			data
		};
		return {...state,
			loading: false,
			response: response,
			initialValues: {
				items: keyBy(data, 'id'),
			}
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

import {
	FETCH,
	ADD_ITEM,
	SAVE_ITEM,
	DELETE_ITEM
} from '../constants/ActionTypes';
import axios from 'axios';

const fetchActionCreator = (filter) => {
	const filterArray = Object.keys(filter).map(key => `${key}=${filter[key]}`);
	return {
		type: FETCH,
		payload: axios.get(`/api/data.json?${filterArray.join('&')}`)
	};
};

export const fetch = (filter = {}) => dispatch => {
	dispatch(fetchActionCreator(filter));
};

export const addItem = () => (dispatch, getState) => {
	dispatch({
		type: ADD_ITEM,
		payload: axios.post('/api/', getState().form.add.values)
	});
};

export const saveItem = id => (dispatch, getState) => {
	dispatch({
		type: SAVE_ITEM,
		payload: axios.post(`/api/${id}`, getState().form.list.values.items[id])
	});
};

export const deleteItem = id => dispatch => {
	dispatch({
		type: DELETE_ITEM,
		payload: axios.delete(`/api/${id}`)
	});
};

export const applyFilter = action => (dispatch, getState) => {
	Promise.resolve(action && dispatch(action))
		.then(() => 
			dispatch(fetch(getState().form.filter.values))
		);
};

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

const saveItemAction = data => ({
	type: SAVE_ITEM,
	payload: axios.post(`/api/${data.id}`, data)
});

export const saveItem = data => dispatch => {
	dispatch(saveItemAction(data));
};

const deleteItemAction = data => ({
	type: DELETE_ITEM,
	payload: axios.delete(`/api/${data.id}`)
});

export const deleteItem = data => dispatch => {
	dispatch(deleteItemAction(data));
};

export const applyFilter = action => (dispatch, getState) => {
	const promise = action ? dispatch({
		...action,
		payload: Promise.resolve(action.payload)
	}) : Promise.resolve();
	promise.then(() => dispatch(fetch(getState().form.filter.values)));
};

import {
	FETCH,
	CHANGE_ITEM,
	ADD_ITEM,
	SAVE_ITEM
} from '../constants/ActionTypes';
import axios from 'axios';

const fetchAction = ({ page = 1 }) => ({
	type: FETCH,
	payload: axios.get(`/api/data.json?page=${page}`)
});

export const fetch = (data = {}) => dispatch => {
	dispatch(fetchAction(data));
};

const addItemData = data => ({
	type: ADD_ITEM,
	payload: axios.post('/api/', data)
});

export const addItem = data => dispatch => {
	dispatch(addItemData(data)).catch(() => {
		dispatch(fetchAction());
	});
};

const changeItemAction = payload => ({
	type: CHANGE_ITEM,
	payload: payload
});

export const changeItem = payload => dispatch => {
	dispatch(changeItemAction(payload));
};

const saveItemAction = data => ({
	type: SAVE_ITEM,
	payload: axios.post(`/api/${data.id}`, data)
});

export const saveItem = data => dispatch => {
	dispatch(saveItemAction(data));
};

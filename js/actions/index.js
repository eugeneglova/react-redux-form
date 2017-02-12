import {
	FETCH,
	CHANGE_LIST_ITEM,
	CHANGE_FILTER,
	ADD_ITEM,
	SAVE_ITEM,
	DELETE_ITEM
} from '../constants/ActionTypes';
import axios from 'axios';

const fetchAction = ({
		page = 1,
		title,
		type = [],
		day = [],
		minAmount,
		maxAmount,
		platform = [],
		server = [],
		group = [],
		modifiedBy = [],
		modifiedDate = [],
		perPage = 100
	}) => {
	let filter = [];

	if (page !== 1) {
		filter.push(`page=${page}`);
	}

	if (title) {
		filter.push(`title=${title}`);
	}

	if (type.length) {
		filter.push(`type=${type.join(',')}`);
	}

	if (day.length) {
		filter.push(`day=${day.join(',')}`);
	}

	if (minAmount) {
		filter.push(`minAmount=${minAmount}`);
	}

	if (maxAmount) {
		filter.push(`maxAmount=${maxAmount}`);
	}

	if (platform.length) {
		filter.push(`platform=${platform.join(',')}`);
	}

	if (server.length) {
		filter.push(`server=${server.join(',')}`);
	}

	if (group.length) {
		filter.push(`group=${group.join(',')}`);
	}

	if (modifiedBy.length) {
		filter.push(`modifiedBy=${modifiedBy.join(',')}`);
	}

	if (modifiedDate.length) {
		filter.push(`modifiedDate=${modifiedDate.join(',')}`);
	}

	if (perPage !== 100) {
		filter.push(`perPage=${perPage}`);
	}

	return {
		type: FETCH,
		payload: axios.get(`/api/data.json?${filter.join('&')}`)
	};
};

export const fetch = (filter = {}) => dispatch => {
	dispatch(fetchAction(filter));
};

export const addItem = () => (dispatch, getState) => {
	dispatch({
		type: ADD_ITEM,
		payload: axios.post('/api/', getState().form.add.values)
	});
};

const changeListItemAction = payload => ({
	type: CHANGE_LIST_ITEM,
	payload: payload
});

export const changeListItem = payload => dispatch => {
	dispatch(changeListItemAction(payload));
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

const changeFilterAction = payload => ({
	type: CHANGE_FILTER,
	payload: Promise.resolve(payload)
});

export const changeFilter = payload => (dispatch, getState) => {
	dispatch(changeFilterAction(payload)).then(() => {
		dispatch(fetchAction(getState().dataFromAPI.filter));
	});
};

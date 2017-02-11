import {
	FETCH,
	CHANGE_ITEM,
	CHANGE_FILTER,
	ADD_ITEM,
	SAVE_ITEM
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
		modifiedDate = []
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

	return {
		type: FETCH,
		payload: axios.get(`/api/data.json?${filter.join('&')}`)
	};
};

export const fetch = (filter = {}) => dispatch => {
	dispatch(fetchAction(filter));
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

const changeFilterAction = payload => ({
	type: CHANGE_FILTER,
	payload: Promise.resolve(payload)
});

export const changeFilter = payload => (dispatch, getState) => {
	dispatch(changeFilterAction(payload)).then(() => {
		fetchAction(getState().dataFromAPI.filter);
	});
};

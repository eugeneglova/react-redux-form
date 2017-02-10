import {
	FETCH,
	ADD_ITEM
} from '../constants/ActionTypes';
import axios from 'axios';

const fetchByName = name => ({
	type: FETCH,
	payload: axios.get('/api/' + name + '.json')
});

export const fetch = name => dispatch => {
	dispatch(fetchByName(name));
};

const addItemData = data => ({
	type: ADD_ITEM,
	payload: axios.post('/api/', data)
});

export const addItem = data => dispatch => {
	dispatch(addItemData(data)).catch(() => {
		dispatch(fetchByName('data'));
	});
};

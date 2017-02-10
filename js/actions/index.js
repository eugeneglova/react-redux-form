import { FETCH } from '../constants/ActionTypes';
import axios from 'axios';

const fetchByName = name => ({
  type: FETCH,
  payload: axios.get('/api/' + name + '.json')
});

export const fetch = name => dispatch => {
	dispatch(fetchByName(name));
};

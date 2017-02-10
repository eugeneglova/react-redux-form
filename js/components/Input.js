import React from 'react';
import { connect } from 'react-redux';
import {
	INPUT_CHANGE
} from '../constants/ActionTypes';

const Input = connect()(
	({ dispatch, field }) => (
		<input type="text" onChange={e =>
			dispatch({
				type: INPUT_CHANGE,
				payload: {
					key: field,
					value: e.target.value
				}
			})
		} />
	)
);

export default Input;

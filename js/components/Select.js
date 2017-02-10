import React from 'react';
import { connect } from 'react-redux';
import {
	SELECT_CHANGE
} from '../constants/ActionTypes';


const Select = connect()(
	({ dispatch, stateKey, multiple, title, data }) => (
		<select multiple={multiple} onChange={e =>
			dispatch({
				type: SELECT_CHANGE,
				payload: {
					key: stateKey,
					value: e.target.value
				}
			})
		}>
			{title ? <option>{title}</option> : ''}
			{data.map((val, key) => (
				<option key={key}>
					{val}
				</option>
			))}
		</select>
	)
);

export default Select;

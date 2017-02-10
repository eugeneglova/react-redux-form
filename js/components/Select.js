import React from 'react';
import { connect } from 'react-redux';
import {
	SELECT_CHANGE
} from '../constants/ActionTypes';

const getSelectedValues = (select) => [].slice.call(select.options).filter((o) => o.selected).map((o) => o.value);

const Select = connect()(
	({ dispatch, field, multiple, title, data }) => (
		<select multiple={multiple} onChange={e =>
			dispatch({
				type: SELECT_CHANGE,
				payload: {
					key: field,
					value: getSelectedValues(e.target)
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

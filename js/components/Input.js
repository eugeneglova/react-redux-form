import React from 'react';
import { connect } from 'react-redux';
import { changeItem } from '../actions';

const Input = connect()(
	({ dispatch, index, field }) => (
		<input type="text" onChange={e =>
			dispatch(changeItem({
				index,
				key: field,
				value: e.target.value
			}))
		} />
	)
);

export default Input;

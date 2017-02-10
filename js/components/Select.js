import React from 'react';

const Select = ({ multiple, title, data }) => (
	<select multiple={multiple}>
		{title ? <option>{title}</option> : ''}
		{data.map((val, key) => (
			<option key={key}>
				{val}
			</option>
		))}
	</select>
);

export default Select;

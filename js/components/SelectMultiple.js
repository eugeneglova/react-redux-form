import React from 'react';

const SelectMultiple = ({ title, data }) => (
	<select multiple="true">
		<option>{title}</option>
		{data.map((val, key) => (
			<option key={key}>
				{val.color}
			</option>
		))}
	</select>
);

export default SelectMultiple;

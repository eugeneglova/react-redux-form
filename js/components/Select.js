import React from 'react';

const getSelectedValues = (select) => [].slice.call(select.options).filter((o) => o.selected).map((o) => o.value);

const Select = (
	({ multiple, title, value, data, onChange }) => (
		<select
			multiple={multiple}
			value={value}
			onChange={e => onChange(getSelectedValues(e.target))}
		>
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

import React from 'react';

const getSelectedValues = (select) => [].slice.call(select.options).filter((o) => o.selected).map((o) => o.value);

const Select = (
	({ multiple, title, data, onChange }) => (
		<select multiple={multiple} onChange={e =>
			onChange(getSelectedValues(e.target))
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

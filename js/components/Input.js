import React from 'react';

const Input = (
	({ value, placeholder, onChange }) => (
		<input
			type="text"
			defaultValue={value}
			placeholder={placeholder}
			onChange={e => onChange(e.target.value)}
		/>
	)
);

export default Input;

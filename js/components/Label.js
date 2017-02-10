import React from 'react';

const Label = ({ text, required }) => (
	<label>
		{required ? '*' : ''}
		{text}:
	</label>
);

export default Label;

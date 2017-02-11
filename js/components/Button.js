import React from 'react';

const Button = ({ text, disabled, onClick }) => (
	<button onClick={onClick} disabled={disabled}>
		{text}
	</button>
);

export default Button;

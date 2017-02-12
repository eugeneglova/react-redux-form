import React from 'react';
import { connect } from 'react-redux';
import { applyFilter } from '../actions';
import { Field, reduxForm } from 'redux-form';

const PerPage = connect()(
	({ dispatch }) => (
		<div>
			Show Per:
			<Field name="perPage" component="select" onChange={() => dispatch(applyFilter())}>
				{[100, 200, 300].map((option, index) =>
					<option key={index}>{option}</option>
				)}
			</Field>
		</div>
	)
);

export default reduxForm({
	form: 'filter'
})(PerPage);

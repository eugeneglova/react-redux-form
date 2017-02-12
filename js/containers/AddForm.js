import React from 'react';
import { connect } from 'react-redux';
import Label from '../components/Label';
import { addItem } from '../actions';
import { Field, reduxForm } from 'redux-form';

const AddForm = connect()(
	({ dispatch, reset, handleSubmit }) => (
		<form onSubmit={handleSubmit(() => dispatch(addItem()))}>
			<table>
				<tbody>
					<tr>
						<td>
							<Label text="Title" required={true} />
							<br />
							<Field name="title" component="input" type="text" />
						</td>
						<td>
							<Label text="From" required={true} />
							<br />
							<Field name="fromHH" component="input" type="text" />
							:
							<Field name="fromMM" component="input" type="text" />
						</td>
						<td>
							<Label text="To" required={true} />
							<br />
							<Field name="toHH" component="input" type="text" />
							:
							<Field name="toMM" component="input" type="text" />
						</td>
						<td>
							<label>
								<Field name="runAllDay" component="input" type="checkbox" />
								Run All Day
							</label>
						</td>
						<td>
							<Label text="Type" required={true} />
							<br />
							<Field name="type" component="select">
								<option value="">Please select [Type]</option>
								{['All', 'Deposits', 'Withdrawals'].map((option, index) =>
									<option key={index}>{option}</option>
								)}
							</Field>
						</td>
						<td>
							<Label text="Day" required={true} />
							<br />
							<Field name="type" component="select">
								<option value="">Please select [Day]</option>
								{['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((option, index) =>
									<option key={index}>{option}</option>
								)}
							</Field>
						</td>
						<td>
							<Label text="Min Amount" />
							<br />
							<Field name="minAmount" component="input" type="text" />
						</td>
						<td>
							<Label text="Max Amount" />
							<br />
							<Field name="maxAmount" component="input" type="text" />
						</td>
						<td>
							<Label text="Trading Platform" />
							<br />
							<Field name="platform" component="select">
								<option value="">[Platforms]</option>
								{['All', 'MT4', 'MT5', 'Tradologic'].map((option, index) =>
									<option key={index}>{option}</option>
								)}
							</Field>
						</td>
						<td>
							<Label text="Platform Server" />
							<br />
							<Field name="server" component="select">
								<option value="">[Servers]</option>
								{['All', 'Live20', 'Live21'].map((option, index) =>
									<option key={index}>{option}</option>
								)}
							</Field>
						</td>
						<td>
							<Label text="Group" />
							<br />
							<Field name="group" component="select">
								<option value="">[Groups]</option>
								{['All', 'usd-11', 'usd-risk'].map((option, index) =>
									<option key={index}>{option}</option>
								)}
							</Field>
						</td>
					</tr>
				</tbody>
			</table>
			<div>
				<button type="button" onClick={reset}>Cancel</button>
				<button type="submit">Add</button>
			</div>
		</form>
	)
);

export default reduxForm({
	form: 'add'
})(AddForm);

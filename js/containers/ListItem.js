import React from 'react';
import { connect } from 'react-redux';
import { saveItem, deleteItem } from '../actions';
import { Field, reduxForm } from 'redux-form';

const ListItem = connect()(
	({ dispatch, item }) => (
		<tr>
			<td>
				<input type="checkbox" />
			</td>
			<td>
				{item.comment}
			</td>
			<td>
				<Field name={`items[${item.id}].type`} component="select">
					{['All', 'Deposits', 'Withdrawals'].map((option, index) =>
						<option key={index}>{option}</option>
					)}
				</Field>
			</td>
			<td>
				<Field name={`items[${item.id}].day`} component="select">
					{['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((option, index) =>
						<option key={index}>{option}</option>
					)}
				</Field>
			</td>
			<td>
				<Field name={`items[${item.id}].minAmount`} placeholder="Min Amount" component="input" type="text" />
			</td>
			<td>
				<Field name={`items[${item.id}].maxAmount`} placeholder="Min Amount" component="input" type="text" />
			</td>
			<td>
				<Field name={`items[${item.id}].platform`} component="select">
					{['All', 'MT4', 'MT5', 'Tradologic'].map((option, index) =>
						<option key={index}>{option}</option>
					)}
				</Field>
			</td>
			<td>
				<Field name={`items[${item.id}].server`} component="select">
					{['All', 'Live20', 'Live21'].map((option, index) =>
						<option key={index}>{option}</option>
					)}
				</Field>
			</td>
			<td>
				<Field name={`items[${item.id}].group`} component="select">
					{['All', 'usd-11', 'usd-risk'].map((option, index) =>
						<option key={index}>{option}</option>
					)}
				</Field>
			</td>
			<td>
				admin
			</td>
			<td>
				{item.updated_at}
			</td>
			<td>
				<button onClick={() => dispatch(saveItem(item.id))}>Save</button>
			</td>
			<td>
				<button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
			</td>
		</tr>
	)
);

export default reduxForm({
	form: 'list'
})(ListItem);

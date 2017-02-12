import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Select from '../components/Select';
import { saveItem, deleteItem } from '../actions';
import { reduxForm } from 'redux-form';

const ListItem = connect()(
	({ dispatch, item, index }) => (
		<tr>
			<td>
				<input type="checkbox" />
			</td>
			<td>
				{item.comment}
			</td>
			<td>
				<Select
					data={['All', 'Deposits', 'Withdrawals']}
					value={item.type}
					onChange={(value) => dispatch(changeListItem({
						key: 'type',
						value,
						index
					}))}
				/>
			</td>
			<td>
				<Select
					data={['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
					value={item.day}
					onChange={(value) => dispatch(changeListItem({
						key: 'day',
						value,
						index
					}))}
				/>
			</td>
			<td>
				<Input value={item.minAmount || item.amount}
					onChange={(value) => dispatch(changeListItem({
						key: 'minAmount',
						value,
						index
					}))}
				/>
			</td>
			<td>
				<Input value={item.maxAmount || item.amount}
					onChange={(value) => dispatch(changeListItem({
						key: 'maxAmount',
						value,
						index
					}))}
				/>
			</td>
			<td>
				<Select
					data={['All', 'MT4', 'MT5', 'Tradologic']}
					value={item.platform}
					onChange={(value) => dispatch(changeListItem({
						key: 'platform',
						value,
						index
					}))}
				/>
			</td>
			<td>
				<Select
					data={['All', 'Live20', 'Live21']}
					value={item.server}
					onChange={(value) => dispatch(changeListItem({
						key: 'server',
						value,
						index
					}))}
				/>
			</td>
			<td>
				<Select
					data={['All', 'usd-11', 'usd-risk']}
					value={item.group}
					onChange={(value) => dispatch(changeListItem({
						key: 'group',
						value,
						index
					}))}
				/>
			</td>
			<td>
				admin
			</td>
			<td>
				{item.updated_at}
			</td>
			<td>
				<button onClick={() => dispatch(saveItem(item))}>Save</button>
			</td>
			<td>
				<button onClick={() => dispatch(deleteItem(item))}>Delete</button>
			</td>
		</tr>
	)
);

export default reduxForm({
	form: 'listItem'
})(ListItem);

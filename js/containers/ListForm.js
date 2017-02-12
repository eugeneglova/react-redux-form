import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Select from '../components/Select';
import Pagination from '../components/Pagination';
import { applyFilter, saveItem, deleteItem } from '../actions';
import { Field, reduxForm } from 'redux-form';


const ListForm = connect(({ dataFromAPI }) => dataFromAPI)(
	({ dispatch, change, handleSubmit, loading, response }) => {
		const loadingDiv = (
			<tr>
				<td colSpan="12">
					<div>Loading...</div>
				</td>
			</tr>
		);

		const tableHeader = (
			<tr>
				<td>
					<input type="checkbox" />
				</td>
				<td>
					<Field name="title" placeholder="Title" component="input" type="text" onChange={() => dispatch(applyFilter())} />
					<button>Down</button>
					<button type="button" onClick={() => dispatch(applyFilter(change('title', '')))}>X</button>
				</td>
				<td>
					<Field name="type" component="select" onChange={() => dispatch(applyFilter())}>
						<option value="">[Type]</option>
						{['All', 'Deposits', 'Withdrawals'].map((option, index) =>
							<option key={index}>{option}</option>
						)}
					</Field>
					<button>Down</button>
					<button type="button" onClick={() => dispatch(applyFilter(change('type', '')))}>X</button>
				</td>
				<td>
					<Field name="day" component="select" onChange={() => dispatch(applyFilter())}>
						<option value="">[Day]</option>
						{['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((option, index) =>
							<option key={index}>{option}</option>
						)}
					</Field>
					<button>Down</button>
					<button type="button" onClick={() => dispatch(applyFilter(change('day', '')))}>X</button>
				</td>
				<td>
					<Field name="minAmount" placeholder="Min Amount" component="input" type="text" onChange={() => dispatch(applyFilter())} />
					<button>Down</button>
					<button type="button" onClick={() => dispatch(applyFilter(change('minAmount', '')))}>X</button>
				</td>
				<td>
					<Field name="maxAmount" placeholder="Max Amount" component="input" type="text" onChange={() => dispatch(applyFilter())} />
					<button>Down</button>
					<button type="button" onClick={() => dispatch(applyFilter(change('maxAmount', '')))}>X</button>
				</td>
				<td>
					<Field name="platform" component="select" onChange={() => dispatch(applyFilter())}>
						<option value="">[Platforms]</option>
						{['All', 'MT4', 'MT5', 'Tradologic'].map((option, index) =>
							<option key={index}>{option}</option>
						)}
					</Field>
					<button>Down</button>
					<button type="button" onClick={() => dispatch(applyFilter(change('platform', '')))}>X</button>
				</td>
				<td>
					<Field name="server" component="select" onChange={() => dispatch(applyFilter())}>
						<option value="">[Servers]</option>
						{['All', 'Live20', 'Live21'].map((option, index) =>
							<option key={index}>{option}</option>
						)}
					</Field>
					<button>Down</button>
					<button type="button" onClick={() => dispatch(applyFilter(change('server', '')))}>X</button>
				</td>
				<td>
					<Field name="group" component="select" onChange={() => dispatch(applyFilter())}>
						<option value="">[Groups]</option>
						{['All', 'usd-11', 'usd-risk'].map((option, index) =>
							<option key={index}>{option}</option>
						)}
					</Field>
					<button>Down</button>
					<button type="button" onClick={() => dispatch(applyFilter(change('group', '')))}>X</button>
				</td>
				<td>
					<Field name="modifiedBy" component="select" onChange={() => dispatch(applyFilter())}>
						<option value="">[Modified By]</option>
						{['All', 'admin', 'user'].map((option, index) =>
							<option key={index}>{option}</option>
						)}
					</Field>
					<button>Down</button>
					<button type="button" onClick={() => dispatch(applyFilter(change('modifiedBy', '')))}>X</button>
				</td>
				<td>
					<Field name="modifiedDate" component="select" onChange={() => dispatch(applyFilter())}>
						<option value="">Modified Date</option>
						{['All'].map((option, index) =>
							<option key={index}>{option}</option>
						)}
					</Field>
				</td>
				<td>
					Save
				</td>
				<td>
					Delete
				</td>
			</tr>
		);

		const tableContent = response.data && response.data.map((item, index) => (
			<tr key={item.id}>
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
		));

		return (
			<form onSubmit={handleSubmit(() => {})}>
				<table>
					<tbody>
						{tableHeader}
						{loading ? loadingDiv : tableContent}
					</tbody>
				</table>
				<div>
					<button type="button">Delete All</button>
					<button type="button">Save All</button>
					{response.pagination ?
					<Pagination
						totalPages={response.pagination.total_pages}
						currentPage={response.pagination.current_page}
						onClick={(page) => dispatch(applyFilter(change('page', page)))}
					/>
					: ''}
					Show Per:
					<Field name="perPage" component="select" onChange={() => dispatch(applyFilter())}>
						{[100, 200, 300].map((option, index) =>
							<option key={index}>{option}</option>
						)}
					</Field>
				</div>
			</form>
		);
	}
);

export default reduxForm({
	form: 'filter'
})(ListForm);

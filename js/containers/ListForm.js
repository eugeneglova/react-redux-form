import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import Pagination from '../components/Pagination';
import { changeFilter, changeListItem, saveItem } from '../actions';

const ListForm = connect(({ dataFromAPI }) => dataFromAPI)(
	({ dispatch, loading, response, filter }) => {
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
					<Input
						placeholder="Title"
						value={filter.title}
						onChange={(value) => dispatch(changeFilter({
							key: 'title',
							value
						}))}
					/>
					<Button text="Down" />
					<Button text="X"
						onClick={() => dispatch(changeFilter({
							key: 'title',
							value: ''
						}))}
					/>
				</td>
				<td>
					<Select
						title="[Type]"
						value={filter.type}
						data={['All', 'Deposits', 'Withdrawals']}
						onChange={(value) => dispatch(changeFilter({
							key: 'type',
							value
						}))}
					/>
					<Button text="Down" />
					<Button text="X"
						onClick={() => dispatch(changeFilter({
							key: 'type',
							value: []
						}))}
					/>
				</td>
				<td>
					<Select
						title="[Day]"
						value={filter.day}
						data={['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
						onChange={(value) => dispatch(changeFilter({
							key: 'day',
							value
						}))}
					/>
					<Button text="Down" />
					<Button text="X"
						onClick={() => dispatch(changeFilter({
							key: 'day',
							value: []
						}))}
					/>
				</td>
				<td>
					<Input
						placeholder="Min Amount"
						value={filter.minAmount}
						onChange={(value) => dispatch(changeFilter({
							key: 'minAmount',
							value
						}))}
					/>
					<Button text="Down" />
					<Button text="X"
						onClick={() => dispatch(changeFilter({
							key: 'minAmount',
							value: ''
						}))}
					/>
				</td>
				<td>
					<Input
						placeholder="Max Amount"
						value={filter.maxAmount}
						onChange={(value) => dispatch(changeFilter({
							key: 'maxAmount',
							value
						}))}
					/>
					<Button text="Down" />
					<Button text="X"
						onClick={() => dispatch(changeFilter({
							key: 'maxAmount',
							value: ''
						}))}
					/>
				</td>
				<td>
					<Select
						title="[Platforms]"
						value={filter.platform}
						data={['All', 'MT4', 'MT5', 'Tradologic']}
						onChange={(value) => dispatch(changeFilter({
							key: 'platform',
							value
						}))}
					/>
					<Button text="Down" />
					<Button text="X"
						onClick={() => dispatch(changeFilter({
							key: 'platform',
							value: []
						}))}
					/>
				</td>
				<td>
					<Select
						title="[Servers]"
						value={filter.server}
						data={['All', 'Live20', 'Live21']}
						onChange={(value) => dispatch(changeFilter({
							key: 'server',
							value
						}))}
					/>
					<Button text="Down" />
					<Button text="X"
						onClick={() => dispatch(changeFilter({
							key: 'server',
							value: []
						}))}
					/>
				</td>
				<td>
					<Select
						title="[Groups]"
						value={filter.group}
						data={['All', 'usd-11', 'usd-risk']}
						onChange={(value) => dispatch(changeFilter({
							key: 'group',
							value
						}))}
					/>
					<Button text="Down" />
					<Button text="X"
						onClick={() => dispatch(changeFilter({
							key: 'group',
							value: []
						}))}
					/>
				</td>
				<td>
					<Select
						title="[Modified By]"
						value={filter.modifiedBy}
						data={['All', 'admin', 'user']}
						onChange={(value) => dispatch(changeFilter({
							key: 'modifiedBy',
							value
						}))}
					/>
					<Button text="Down" />
					<Button text="X"
						onClick={() => dispatch(changeFilter({
							key: 'modifiedBy',
							value: []
						}))}
					/>
				</td>
				<td>
					<Select
						title="Modified Date"
						value={filter.modifiedDate}
						data={['All']}
						onChange={(value) => dispatch(changeFilter({
							key: 'modifiedDate',
							value
						}))}
					/>
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
					<Button text="Save" onClick={() => dispatch(saveItem(item))} />
				</td>
				<td>
					<Button text="Delete" />
				</td>
			</tr>
		));

		return (
			<div>
				<table>
					<tbody>
						{tableHeader}
						{loading ? loadingDiv : tableContent}
					</tbody>
				</table>
				<div>
					<Button text="Delete All"/ >
					<Button text="Save All" />
					{response.pagination ?
					<Pagination
						totalPages={response.pagination.total_pages}
						currentPage={response.pagination.current_page}
						onClick={(page) => dispatch(changeFilter({
							key: 'page',
							value: page
						}))}
					/>
					: ''}
					Show Per:
					<Select
						data={[100, 200, 300]}
						onChange={(value) => dispatch(changeFilter({
							key: 'perPage',
							value: parseInt(value, 10)
						}))}
					/>
				</div>
			</div>
		);
	}
);

export default ListForm;

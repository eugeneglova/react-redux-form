import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import Pagination from '../components/Pagination';
import { fetch, changeFilter, changeItem, saveItem } from '../actions';

const ListForm = connect(({ dataFromAPI }) => dataFromAPI)(
	({ dispatch, loading, response, filter }) => {
		if (loading) {
			return (<div>Loading...</div>);
		}

		return (
			<div>
				<table>
					<tbody>
						<tr>
							<td>
								<input type="checkbox" />
							</td>
							<td>
								<Input
									placeholder="Title"
									onChange={(value) => dispatch(changeFilter({
										key: 'title',
										value
									}))}
								/>
								<Button text="Down" />
								<Button text="Close" />
							</td>
							<td>
								<Select
									title="[Type]"
									data={['All', 'Deposits', 'Withdrawals']}
									onChange={(value) => dispatch(changeFilter({
										key: 'type',
										value
									}))}
								/>
								<Button text="Down" />
								<Button text="Close" />
							</td>
							<td>
								<Select
									title="[Day]"
									data={['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
									onChange={(value) => dispatch(changeFilter({
										key: 'day',
										value
									}))}
								/>
								<Button text="Down" />
								<Button text="Close" />
							</td>
							<td>
								<Input
									placeholder="Min Amount"
									onChange={(value) => dispatch(changeFilter({
										key: 'minAmount',
										value
									}))}
								/>
								<Button text="Down" />
								<Button text="Close" />
							</td>
							<td>
								<Input
									placeholder="Max Amount"
									onChange={(value) => dispatch(changeFilter({
										key: 'maxAmount',
										value
									}))}
								/>
								<Button text="Down" />
								<Button text="Close" />
							</td>
							<td>
								<Select
									title="[Platforms]"
									data={['All', 'MT4', 'MT5', 'Tradologic']}
									onChange={(value) => dispatch(changeFilter({
										key: 'platform',
										value
									}))}
								/>
								<Button text="Down" />
								<Button text="Close" />
							</td>
							<td>
								<Select
									title="[Servers]"
									data={['All', 'Live20', 'Live21']}
									onChange={(value) => dispatch(changeFilter({
										key: 'server',
										value
									}))}
								/>
								<Button text="Down" />
								<Button text="Close" />
							</td>
							<td>
								<Select
									title="[Groups]"
									data={['All', 'usd-11', 'usd-risk']}
									onChange={(value) => dispatch(changeFilter({
										key: 'group',
										value
									}))}
								/>
								<Button text="Down" />
								<Button text="Close" />
							</td>
							<td>
								<Select
									title="[Modified By]"
									data={['All', 'admin', 'user']}
									onChange={(value) => dispatch(changeFilter({
										key: 'modifiedBy',
										value
									}))}
								/>
								<Button text="Down" />
								<Button text="Close" />
							</td>
							<td>
								<Select
									title="Modified Date"
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
						{response.data.map((item, index) => (
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
										onChange={(value) => dispatch(changeItem({
											key: 'type',
											value,
											index
										}))}
									/>
								</td>
								<td>
									<Select
										data={['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
										onChange={(value) => dispatch(changeItem({
											key: 'day',
											value,
											index
										}))}
									/>
								</td>
								<td>
									<Input value={item.amount}
										onChange={(value) => dispatch(changeItem({
											key: 'minAmount',
											value,
											index
										}))}
									/>
								</td>
								<td>
									<Input value={item.amount}
										onChange={(value) => dispatch(changeItem({
											key: 'maxAmount',
											value,
											index
										}))}
									/>
								</td>
								<td>
									<Select
										data={['All', 'MT4', 'MT5', 'Tradologic']}
										onChange={(value) => dispatch(changeItem({
											key: 'platform',
											value,
											index
										}))}
									/>
								</td>
								<td>
									<Select
										data={['All', 'Live20', 'Live21']}
										onChange={(value) => dispatch(changeItem({
											key: 'server',
											value,
											index
										}))}
									/>
								</td>
								<td>
									<Select
										data={['All', 'usd-11', 'usd-risk']}
										onChange={(value) => dispatch(changeItem({
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
						))}
					</tbody>
				</table>
				<div>
					<Button text="Delete All"/ >
					<Button text="Save All" />
					<Pagination
						totalPages={response.pagination.total_pages}
						currentPage={response.pagination.current_page}
						onClick={(page) => dispatch(changeFilter({
							key: 'page',
							value: page
						}))}
					/>
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

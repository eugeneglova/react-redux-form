import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import Pagination from '../components/Pagination';
import { fetch, changeItem, saveItem } from '../actions';

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
									value="Title"
								/>
								<Button text="Down" />
								<Button text="Close" />
							</td>
							<td>
								<Select
									title="[Type]"
									data={['All', 'Deposits', 'Withdrawals']}
								/>
								<Button text="Down" />
								<Button text="Close" />
							</td>
							<td>
								<Select
									title="[Day]"
									data={['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
								/>
								<Button text="Down" />
								<Button text="Close" />
							</td>
							<td>
								<input type="text" defaultValue="Min Amount" />
								<Button text="Down" />
								<Button text="Close" />
							</td>
							<td>
								<input type="text" defaultValue="Max Amount" />
								<Button text="Down" />
								<Button text="Close" />
							</td>
							<td>
								<Select
									title="[Platforms]"
									data={['All', 'MT4', 'MT5', 'Tradologic']}
								/>
								<Button text="Down" />
								<Button text="Close" />
							</td>
							<td>
								<Select
									title="[Servers]"
									data={['All', 'Live20', 'Live21']}
								/>
								<Button text="Down" />
								<Button text="Close" />
							</td>
							<td>
								<Select
									title="[Groups]"
									data={['All', 'usd-11', 'usd-risk']}
								/>
								<Button text="Down" />
								<Button text="Close" />
							</td>
							<td>
								<Select
									title="[Modified By]"
									data={['All', 'admin', 'user']}
								/>
								<Button text="Down" />
								<Button text="Close" />
							</td>
							<td>
								<Select
									title="Modified Date"
									data={['All']}
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
						onClick={(page) => dispatch(fetch({ ...filter, page }))}
					/>
					Show Per:
					<Select data={[100, 200, 300]} />
				</div>
			</div>
		);
	}
);

export default ListForm;

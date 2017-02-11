import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import Pagination from '../components/Pagination';
import { fetch, saveItem } from '../actions';

const ListForm = connect(state => state)(
	({ dispatch, dataFromAPI }) => {
		if (dataFromAPI.loading) {
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
								<input type="text" defaultValue="Title" />
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
						{dataFromAPI.response.data.map((item, index) => (
							<tr key={item.id}>
								<td>
									<input type="checkbox" />
								</td>
								<td>
									{item.comment}
								</td>
								<td>
									<Select
										index={index}
										field="type"
										data={['All', 'Deposits', 'Withdrawals']}
									/>
								</td>
								<td>
									<Select
										index={index}
										field="day"
										data={['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
									/>
								</td>
								<td>
									<Input index={index} field="minAmount" value={item.amount} />
								</td>
								<td>
									<Input index={index} field="maxAmount" value={item.amount} />
								</td>
								<td>
									<Select
										index={index}
										field="platform"
										data={['All', 'MT4', 'MT5', 'Tradologic']}
									/>
								</td>
								<td>
									<Select
										index={index}
										field="server"
										data={['All', 'Live20', 'Live21']}
									/>
								</td>
								<td>
									<Select
										index={index}
										field="group"
										data={['All', 'usd-11', 'usd-risk']}
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
						totalPages={dataFromAPI.response.pagination.total_pages}
						currentPage={dataFromAPI.response.pagination.current_page}
						onClick={(page) => dispatch(fetch({ page }))}
					/>
					Show Per:
					<Select data={[100, 200, 300]} />
				</div>
			</div>
		);
	}
);

export default ListForm;

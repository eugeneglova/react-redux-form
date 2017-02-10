import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';

const ListForm = connect(state => state)(
	({ dataFromAPI }) => {
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
						{dataFromAPI.response.data.map((item) => (
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
									/>
								</td>
								<td>
									<Select
										data={['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
									/>
								</td>
								<td>
									<input type="text" defaultValue={item.amount} />
								</td>
								<td>
									<input type="text" defaultValue={item.amount} />
								</td>
								<td>
									<Select
										data={['All', 'MT4', 'MT5', 'Tradologic']}
									/>
								</td>
								<td>
									<Select
										data={['All', 'Live20', 'Live21']}
									/>
								</td>
								<td>
									<Select
										data={['All', 'usd-11', 'usd-risk']}
									/>
								</td>
								<td>
									<Select
										data={['All', 'admin', 'user']}
									/>
								</td>
								<td>
									<Select
										data={['All']}
									/>
								</td>
								<td>
									<Button text="Save" />
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
					<div>
						Prev
						1
						...
						2
						15
						Next
					</div>
					Show Per:
					<Select data={[100, 200, 300]} />
				</div>
			</div>
		);
	}
);

export default ListForm;

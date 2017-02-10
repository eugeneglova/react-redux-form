import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';

const ListForm = connect()(
	({ data }) => (
		<div>
			<table>
				<tbody>
					<tr>
						<td>
							<input type="checkbox" />
						</td>
						<td>
							<input type="text" value="Title" />
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
							<input type="text" value="Min Amount" />
							<Button text="Down" />
							<Button text="Close" />
						</td>
						<td>
							<input type="text" value="Max Amount" />
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
					</tr>
					{data.map((item, key) => (
						<tr key={key}>
							<td>
								<input type="checkbox" />
							</td>
							<td>
								title
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
								<input type="text" value="Min Amount" />
							</td>
							<td>
								<input type="text" value="Max Amount" />
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
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
);

export default ListForm;

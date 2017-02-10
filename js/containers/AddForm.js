import React from 'react';
import { connect } from 'react-redux';
import Label from '../components/Label';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import { addItem } from '../actions';

const AddForm = connect(({ add }) => add)(
	({ dispatch, data }) => (
		<div>
			<table>
				<tbody>
					<tr>
						<td>
							<Label text="Title" required={true} />
							<br />
							<Input stateKey="title" />
						</td>
						<td>
							<Label text="From" required={true} />
							<br />
							<Input stateKey="fromHH" /> : <Input stateKey="fromMM" />
						</td>
						<td>
							<Label text="To" required={true} />
							<br />
							<Input stateKey="toHH" /> : <Input stateKey="toMM" />
						</td>
						<td>
							<label>
								<input type="checkbox" />
								Run All Day
							</label>
						</td>
						<td>
							<Label text="Type" required={true} />
							<br />
							<Select
								multiple={true}
								title="Please select [Type]"
								data={['All', 'Deposits', 'Withdrawals']}
							/>
						</td>
						<td>
							<Label text="Day" required={true} />
							<br />
							<Select
								multiple={true}
								title="Please select [Day]"
								data={['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
							/>
						</td>
						<td>
							<Label text="Min Amount" />
							<br />
							<Input stateKey="minAmount" />
						</td>
						<td>
							<Label text="Max Amount" />
							<br />
							<Input stateKey="maxAmount" />
						</td>
						<td>
							<Label text="Trading Platform" />
							<br />
							<Select
								multiple={true}
								title="[Platforms]"
								data={['All', 'MT4', 'MT5', 'Tradologic']}
							/>
						</td>
						<td>
							<Label text="Platform Server" />
							<br />
							<Select
								multiple={true}
								title="[Servers]"
								data={['All', 'Live20', 'Live21']}
							/>
						</td>
						<td>
							<Label text="Group" />
							<br />
							<Select
								multiple={true}
								title="[Groups]"
								data={['All', 'usd-11', 'usd-risk']}
							/>
						</td>
					</tr>
				</tbody>
			</table>
			<div>
				<Button text="Cancel" />
				<Button text="Add" onClick={() => dispatch(addItem(data))} />
			</div>
		</div>
	)
);

export default AddForm;

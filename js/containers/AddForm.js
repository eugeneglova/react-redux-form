import React from 'react';
import { connect } from 'react-redux';
import Label from '../components/Label';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import { changeAddItem, addItem } from '../actions';

const AddForm = connect(({ add }) => add)(
	({ dispatch, data }) => (
		<div>
			<table>
				<tbody>
					<tr>
						<td>
							<Label text="Title" required={true} />
							<br />
							<Input
								value={data.title}
								onChange={(value) => dispatch(changeAddItem({
									key: 'title',
									value
								}))}
							/>
						</td>
						<td>
							<Label text="From" required={true} />
							<br />
							<Input
								value={data.fromHH}
								onChange={(value) => dispatch(changeAddItem({
									key: 'fromHH',
									value
								}))}
							/> : <Input
								value={data.fromMM}
								onChange={(value) => dispatch(changeAddItem({
									key: 'fromMM',
									value
								}))}
							/>
						</td>
						<td>
							<Label text="To" required={true} />
							<br />
							<Input
								value={data.toHH}
								onChange={(value) => dispatch(changeAddItem({
									key: 'toHH',
									value
								}))}
							/> : <Input
								value={data.toMM}
								onChange={(value) => dispatch(changeAddItem({
									key: 'toMM',
									value
								}))}
							/>
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
								value={data.type}
								onChange={(value) => dispatch(changeAddItem({
									key: 'type',
									value
								}))}
							/>
						</td>
						<td>
							<Label text="Day" required={true} />
							<br />
							<Select
								multiple={true}
								title="Please select [Day]"
								data={['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
								value={data.day}
								onChange={(value) => dispatch(changeAddItem({
									key: 'day',
									value
								}))}
							/>
						</td>
						<td>
							<Label text="Min Amount" />
							<br />
							<Input
								value={data.minAmount}
								onChange={(value) => dispatch(changeAddItem({
									key: 'minAmount',
									value
								}))}
							/>
						</td>
						<td>
							<Label text="Max Amount" />
							<br />
							<Input
								value={data.maxAmount}
								onChange={(value) => dispatch(changeAddItem({
									key: 'maxAmount',
									value
								}))}
							/>
						</td>
						<td>
							<Label text="Trading Platform" />
							<br />
							<Select
								multiple={true}
								title="[Platforms]"
								data={['All', 'MT4', 'MT5', 'Tradologic']}
								value={data.platform}
								onChange={(value) => dispatch(changeAddItem({
									key: 'platform',
									value
								}))}
							/>
						</td>
						<td>
							<Label text="Platform Server" />
							<br />
							<Select
								multiple={true}
								title="[Servers]"
								data={['All', 'Live20', 'Live21']}
								value={data.server}
								onChange={(value) => dispatch(changeAddItem({
									key: 'server',
									value
								}))}
							/>
						</td>
						<td>
							<Label text="Group" />
							<br />
							<Select
								multiple={true}
								title="[Groups]"
								data={['All', 'usd-11', 'usd-risk']}
								valueld={data.group}
								onChange={(value) => dispatch(changeAddItem({
									key: 'group',
									value
								}))}
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

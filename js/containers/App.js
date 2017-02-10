import React from 'react';
import { connect } from 'react-redux';
import Label from '../components/Label';
import Input from '../components/Input';
import SelectMultiple from '../components/SelectMultiple';
import Button from '../components/Button';

const App = connect()(
	() => (
		<div>
			<div>
				[Display System Message]
			</div>
			<div>
				<div>
					<div>
						<Label text="Title" required={true} />
						<Input />
					</div>
					<div>
						<Label text="From" required={true} />
						<Input /> : <Input />
					</div>
					<div>
						<Label text="To" required={true} />
						<Input /> : <Input />
					</div>
					<div>
						<label>
							<input type="checkbox" />
							Run All Day
						</label>
					</div>
					<div>
						<Label text="Type" required={true} />
						<SelectMultiple
							title="Please select [Type]"
							data={['All', 'Deposits', 'Withdrawals']}
						/>
					</div>
					<div>
						<Label text="Day" required={true} />
						<SelectMultiple
							title="Please select [Day]"
							data={['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
						/>
					</div>
					<div>
						<Label text="Min Amount" />
						<Input />
					</div>
					<div>
						<Label text="Max Amount" />
						<Input />
					</div>
					<div>
						<Label text="Trading Platform" />
						<SelectMultiple
							title="[Platforms]"
							data={['All', 'MT4', 'MT5', 'Tradologic']}
						/>
					</div>
					<div>
						<Label text="Platform Server" />
						<SelectMultiple
							title="[Servers]"
							data={['All', 'Live20', 'Live21']}
						/>
					</div>
					<div>
						<Label text="Group" />
						<SelectMultiple
							title="[Groups]"
							data={['All', 'usd-11', 'usd-risk']}
						/>
					</div>
				</div>
				<div>
					<Button text="Cancel" />
					<Button text="Add" />
				</div>
			</div>
		</div>
	)
);

export default App;

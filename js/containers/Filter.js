import React from 'react';
import { applyFilter } from '../actions';
import { Field, reduxForm } from 'redux-form';


const Filter = (
	({ dispatch, change }) => (
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
	)
);

export default reduxForm({
	form: 'filter'
})(Filter);

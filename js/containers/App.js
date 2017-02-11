import React from 'react';
import { connect } from 'react-redux';
import AddForm from './AddForm';
import ListForm from './ListForm';

const App = connect()(
	() => (
		<div>
			<div>
				[Display System Message]
			</div>
			<AddForm />
			<ListForm />
		</div>
	)
);

export default App;

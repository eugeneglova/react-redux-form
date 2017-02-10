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
			<ListForm data={[1,2,3,4]} />
		</div>
	)
);

export default App;

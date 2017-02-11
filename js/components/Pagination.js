import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import times from 'lodash/times';

const App = connect()(
	({ currentPage, totalPages, onClick }) => (
		<div>
			<Button key="prev" text="Prev" disabled={currentPage === 1} onClick={() => onClick(currentPage - 1)} />
			{times(totalPages, page => {
				return <Button key={page} text={page + 1} disabled={currentPage === page + 1} onClick={() => onClick(page + 1)} />;
			})}
			<Button key="next" text="Next" disabled={currentPage === totalPages} onClick={() => onClick(currentPage + 1)} />
		</div>
	)
);

export default App;

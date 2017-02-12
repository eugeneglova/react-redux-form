import React from 'react';
import times from 'lodash/times';

const App = (
	({ currentPage, totalPages, onClick }) => (
		<div>
			<button key="prev" disabled={currentPage === 1} onClick={() => onClick(currentPage - 1)}>
				Prev
			</button>
			{times(totalPages, page => (
				<button key={page} disabled={currentPage === page + 1} onClick={() => onClick(page + 1)}>
					{page + 1}
				</button>
			))}
			<button key="next" disabled={currentPage === totalPages} onClick={() => onClick(currentPage + 1)}>
				Next
			</button>
		</div>
	)
);

export default App;

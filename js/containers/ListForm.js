import React from 'react';
import { connect } from 'react-redux';
import Pagination from '../components/Pagination';
import { applyFilter } from '../actions';
import { change } from 'redux-form';
import Filter from './Filter';
import ListItem from './ListItem';
import PerPage from './PerPage';

const ListForm = connect(({ dataFromAPI }) => dataFromAPI)(
	({ dispatch, loading, response }) => {
		const tableContent = response.data && response.data.map((item, index) =>
			<ListItem {...{ key: item.id, item, index }} />
		);

		return (
			<div>
				<div>
					{loading ? 'Loading data...' : ' '.replace(/ /g, '\u00a0')}
				</div>
				<table>
					<tbody>
						<Filter />
						{tableContent}
					</tbody>
				</table>
				<div>
					<button type="button">Delete All</button>
					<button type="button">Save All</button>
					{response.pagination ?
					<Pagination
						totalPages={response.pagination.total_pages}
						currentPage={response.pagination.current_page}
						onClick={(page) => dispatch(applyFilter(change('filter', 'page', page)))}
					/>
					: ''}
					<PerPage />
				</div>
			</div>
		);
	}
);

export default ListForm;

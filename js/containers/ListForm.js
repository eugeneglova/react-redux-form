import React from 'react';
import { connect } from 'react-redux';
import Pagination from '../components/Pagination';
import { applyFilter } from '../actions';
import { change } from 'redux-form';
import Filter from './Filter';
import ListItem from './ListItem';
import PerPage from './PerPage';

const ListForm = connect(({ dataFromAPI }) => dataFromAPI)(
	({ dispatch, loading, response, initialValues }) => {
		const listItems = response.data && response.data.map((item, index) =>
			<ListItem {...{ key: index, initialValues, item }} />
		);

		return (
			<div>
				<div style={{visibility: loading ? 'visible' : 'hidden'}}>
					Loading data...
				</div>
				<table>
					<tbody>
						<Filter />
						{listItems}
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

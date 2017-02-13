import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';
import App from './containers/App';
import { fetch } from './actions';

const initialState = {
	dataFromAPI: {
		loading: false,
		filter: {},
		response: {}
	}
};

const middleware = [thunk, promiseMiddleware()];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware)));

store.dispatch(fetch());

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

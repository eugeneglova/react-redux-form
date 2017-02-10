import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';
import App from './containers/App';

const initialState = {
};

const middleware = [thunk, promiseMiddleware()];

const store = createStore(reducers, initialState, applyMiddleware(...middleware));

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

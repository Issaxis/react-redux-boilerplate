import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

import App from './components/App';

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

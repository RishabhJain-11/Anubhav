import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { configureStore } from '@reduxjs/toolkit'; // Update import here

import App from './App';

const store = configureStore({
    reducer: reducers, // Assuming reducers is a valid reducer object or function
    middleware: [thunk]
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

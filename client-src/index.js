import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from "redux";
import priceReducer from './reducers/reducer';

const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(priceReducer, composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)));


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)
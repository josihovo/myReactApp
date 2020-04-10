import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)



render(
    <Provider store={store}>
        <App />
    </Provider>,    
    document.getElementById('root'));


serviceWorker.unregister();

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import allReducers from './components/reducers';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
//  console.log(store);
    <Provider store ={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);

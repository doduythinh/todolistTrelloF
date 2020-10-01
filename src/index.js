import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Main from './store/reducer/newsTrello';
import Auth from './store/reducer/Logins';
import { BrowserRouter } from "react-router-dom";
import  { Provider } from "react-redux";
import  createSagaMiddleware from "redux-saga";
import  { applyMiddleware, compose, createStore, combineReducers} from 'redux';
import { Maincall,login } from './store/saga/index';

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

const rootReducer = combineReducers({
  main:Main,
    auth:Auth
})
const sagamidleware = createSagaMiddleware();
const store = createStore(rootReducer,composeEnhancers(
  applyMiddleware(sagamidleware)
))
sagamidleware.run(Maincall)
sagamidleware.run(login)
const app = (
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

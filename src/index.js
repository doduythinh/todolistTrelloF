import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import mainReducer from './store/reducer/newsTrello';
import authReducer from './store/reducer/Logins';

import { BrowserRouter } from "react-router-dom";
import  { Provider } from "react-redux";
import  createSagaMiddleware from "redux-saga";
import  { applyMiddleware, compose, createStore, combineReducers} from 'redux';
import { mainCall,loGin } from './store/saga/index';

import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import 'bootstrap/dist/css/bootstrap.min.css';


const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 ,// Xem thêm tại mục "Quá trình merge".
    blacklist: ['auth'],

};
const authPersistConfig  = {
    key: 'auth',
    storage: storage,
    blacklist: ['token']
};
// console.log("persistConfig",persistConfig,"authPersistConfig",authPersistConfig)
const rootReducer = combineReducers({
    main:mainReducer,
    auth:persistReducer(authPersistConfig,authReducer)
})
const pReducer = persistReducer(persistConfig, rootReducer);
const sagamidleware = createSagaMiddleware();
const store = createStore(pReducer,composeEnhancers(
  applyMiddleware(sagamidleware)
))
const persistor = persistStore(store);
sagamidleware.run(mainCall)
sagamidleware.run(loGin)
const app = (
  <Provider store={store}>
    <BrowserRouter>
        <PersistGate persistor={persistor}>
             <App />
        </PersistGate>
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

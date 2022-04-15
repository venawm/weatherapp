import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import mainReducers from './Redux/ReducerCombiner/ReducerCombiner';
import thunk from 'redux-thunk'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store= createStore(mainReducers,applyMiddleware(thunk))
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


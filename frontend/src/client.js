import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import routes from './routes'
import rootReducer from './reducers/rootReducer'

// Create a fresh Redux store instance
let store = createStore(rootReducer, applyMiddleware(thunk));

console.log("Rendering from client.js");
render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById('app')
);

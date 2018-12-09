import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import RootReducer from './reducers/index.js';
import './index.css';
import {
  toggleDrawer
} from './actions'

console.log('Hello!')

const store = createStore(RootReducer)

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(toggleDrawer())
store.dispatch(toggleDrawer())

// Stop listening to state updates
unsubscribe()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

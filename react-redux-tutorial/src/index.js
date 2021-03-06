import React from 'react';
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const store = createStore(rootReducer, composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

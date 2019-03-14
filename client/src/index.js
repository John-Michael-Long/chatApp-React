import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import App from './components/App';
import  rootReducer from './reducers/rootReducer';
// import style from './styles/main.css';


// const store = createStore(rootReducer);
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(rootReducer);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
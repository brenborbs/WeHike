import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './styles.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import { configureStore } from './store/configureStore';
import ScrollToTop from './utils/ScrollToTop'

const store = configureStore()

// Hot module replacement
const rootEl = document.getElementById('root');

function render() {
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>,
  rootEl
);
}

if(module.hot) {
  module.hot.accept('./App', function() {
    setTimeout(render);
  })
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

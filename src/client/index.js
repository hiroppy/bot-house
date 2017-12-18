// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers';
import './style/common.css';

const rootEl = document.createElement('div');

if (document.body) document.body.appendChild(rootEl);

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', async() => {
    try {
      const registration = await window.navigator.serviceWorker.register('/sw.js');

      console.log('SW registered: ', registration);
    } catch (e) {
      console.warn('SW registration failed: ', e);
    }
  });
}

const render = () => {
  ReactDOM.render((
    <AppContainer>
      <App />
    </AppContainer>),
  rootEl
  );
};

render();

// if (module.hot) {
//   module.hot.accept('./containers/', () => {
//     render();
//   });
// }

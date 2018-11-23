import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import whyDidYouUpdate from 'why-did-you-update';

import configureStore from './helpers/store/configureStore';
import App from './App';

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React);
}

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'));

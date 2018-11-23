import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../App';

const appReady = false;
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App appReady={appReady}/>, div);
});

import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';

import './index.css';
import { App } from './App';
import { store } from 'redux/store';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

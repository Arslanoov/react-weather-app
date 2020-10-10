import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './store/configureStore';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <main className='main'>
      <App />
    </main>
  </Provider>,
  document.getElementById('root')
);

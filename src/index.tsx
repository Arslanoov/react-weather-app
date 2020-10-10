import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/configureStore';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <main className='main'>
        <App />
      </main>
    </Router>
  </Provider>,
  document.getElementById('root')
);

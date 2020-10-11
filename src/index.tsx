import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/configureStore';

import { WeatherServiceProvider } from './weather/contexts/WeatherServiceContext';
import WeatherService from "./weather/services/weatherService";

import App from './App';
import ErrorBoundary from './common/components/ErrorBoundary';

const weatherService = new WeatherService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <WeatherServiceProvider value={weatherService}>
        <Router>
          <main className='main'>
            <App />
          </main>
        </Router>
      </WeatherServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);

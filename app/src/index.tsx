import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/configureStore';

import App from './App';
import ErrorBoundary from './common/components/ErrorBoundary';

import { WeatherServiceProvider } from './weather/contexts/WeatherServiceContext';
import WeatherService from './weather/services/weatherService';

import { NoteServiceProvider } from './note/contexts/NoteServiceContext';
import DummyNoteService from './note/services/dummyNoteService';
import LocalStorageNoteService from './note/services/localStorageNoteService';

const weatherService = new WeatherService();
const noteService = new LocalStorageNoteService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <WeatherServiceProvider value={weatherService}>
        <NoteServiceProvider value={noteService}>
          <Router>
            <main className='main'>
              <App />
            </main>
          </Router>
        </NoteServiceProvider>
      </WeatherServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);

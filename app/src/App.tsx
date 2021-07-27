import * as React from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

import HomePage from './common/pages/HomePage';
import NotFoundPage from './common/pages/NotFoundPage';
import WeatherByCityPage from './weather/pages/WeatherByCityPage';
import IndexPage from './note/pages/IndexPage';
import CreatePage from './note/pages/CreatePage/index';
import ShowPage from './note/pages/ShowPage';
import UpdatePage from './note/pages/UpdatePage/index';

import { NoteServiceProvider } from './note/contexts/NoteServiceContext';
import { WeatherServiceProvider } from './weather/contexts/WeatherServiceContext';

import WeatherService from './weather/services/weatherService';
// import DummyNoteService from './note/services/dummyNoteService';
import LocalStorageNoteService from './note/services/localStorageNoteService';

import 'bootstrap/dist/css/bootstrap.min.css';

const weatherService = new WeatherService();
const noteService = new LocalStorageNoteService();

const App: React.FC = () => (
  <WeatherServiceProvider value={weatherService}>
    <NoteServiceProvider value={noteService}>
      <Router>
        <main className="main">
          <Switch>
            <Route
              path="/"
              component={HomePage}
              exact
            />

            <Route
              path="/weather"
              component={WeatherByCityPage}
              exact
            />

            <Route
              path="/notes"
              component={IndexPage}
              exact
            />

            <Route
              path="/create"
              component={CreatePage}
              exact
            />

            <Route
              path="/note/update/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <UpdatePage id={id} />;
              }}
            />

            <Route
              path="/note/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <ShowPage id={id} />;
              }}
            />

            <Route
              path="/404"
              component={NotFoundPage}
              exact
            />

            <Route>
              <Redirect to="/404" />
            </Route>
          </Switch>
        </main>
      </Router>
    </NoteServiceProvider>
  </WeatherServiceProvider>
);

export default App;

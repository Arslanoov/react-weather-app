import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import 'antd/dist/antd.css';
import './assets/styles/main.scss';

import WeatherLayout from 'weather/layouts/weather-layout/WeatherLayout';

const Home = React.lazy(() => import('./weather/pages/home'));
const Search = React.lazy(() => import('./weather/pages/search'));
const Weather = React.lazy(() => import('./weather/pages/weather'));
const NotFound = React.lazy(() => import('./weather/pages/not-found'));

const App = () => (
  <Router>
    <Suspense fallback={<WeatherLayout />}>
      <Switch>
        <Route
          path="/"
          component={Home}
          exact
        />
        <Route
          path="/search"
          component={Search}
          exact
        />
        <Route
          path="/weather/:city"
          render={({ match }) => {
            const { city } = match.params;
            return <Weather city={city} />;
          }}
          exact
        />
        <Route
          path="/not-found"
          component={NotFound}
          exact
        />
        <Route>
          <Redirect to="/not-found" />
        </Route>
      </Switch>
    </Suspense>
  </Router>
);

export default App;

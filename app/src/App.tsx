import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import 'antd/dist/antd.min.css';
import './assets/styles/main.scss';

import { ThemeSwitcherProvider } from 'react-css-theme-switcher';

import { getSetting } from 'storage/settings';

import { themes } from 'const/themes';

import WeatherLayout from 'weather/layouts/weather-layout/WeatherLayout';

const Home = React.lazy(() => import('./weather/pages/home'));
const Search = React.lazy(() => import('./weather/pages/search'));
const Weather = React.lazy(() => import('./weather/pages/weather'));
const Settings = React.lazy(() => import('./weather/pages/settings'));
const NotFound = React.lazy(() => import('./weather/pages/not-found'));

const App = () => (
  <ThemeSwitcherProvider
    themeMap={themes}
    defaultTheme={getSetting('night_mode')}
  >
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
            path="/settings"
            component={Settings}
            exact
          />
          <Route
            path="/weather/:city"
            component={Weather}
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
  </ThemeSwitcherProvider>
);

export default App;

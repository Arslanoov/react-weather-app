import React from 'react';
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

import Home from 'weather/pages/home';
import Search from 'weather/pages/search';
import Weather from 'weather/pages/weather';
import Settings from 'weather/pages/settings';
import NotFound from 'weather/pages/not-found';

const App = () => (
  <ThemeSwitcherProvider
    themeMap={themes}
    defaultTheme={getSetting('night_mode')}
  >
    <Router>
      <Switch>
        <Route
          path="/"
          component={Home}
          exact
        />
        <Route
          path="/weather/:city"
          component={Weather}
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
          path="/not-found"
          component={NotFound}
          exact
        />
        <Route>
          <Redirect to="/not-found" />
        </Route>
      </Switch>
    </Router>
  </ThemeSwitcherProvider>
);

export default App;

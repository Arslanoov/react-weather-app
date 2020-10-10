import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from "./common/pages/HomePage";
import NotFoundPage from "./common/pages/NotFoundPage";
import WeatherByCityPage from "./weather/pages/WeatherByCityPage";

import './app.scss';

const App: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route
        path='/'
        component={HomePage}
        exact
      />

      <Route
        path='/weather'
        component={WeatherByCityPage}
        exact
      />

      <Route
        path='/404'
        component={NotFoundPage}
        exact
      />

      <Route>
        <Redirect to='/404' />
      </Route>
    </Switch>
  )
};

export default App;

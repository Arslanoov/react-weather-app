import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './app.scss';

import HomePage from "./common/pages/HomePage";
import NotFoundPage from "./common/pages/NotFoundPage";

const App: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route
        path='/'
        component={HomePage}
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

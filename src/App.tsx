import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from "./common/pages/HomePage";
import NotFoundPage from "./common/pages/NotFoundPage";
import WeatherByCityPage from "./weather/pages/WeatherByCityPage";
import IndexPage from './note/pages/IndexPage';
import CreatePage from './note/pages/CreatePage';
import ShowPage from './note/pages/ShowPage';

import 'bootstrap/dist/css/bootstrap.min.css';

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
        path='/notes'
        component={IndexPage}
        exact
      />

      <Route
        path='/create'
        component={CreatePage}
        exact
      />

      <Route
        path='/note/:id'
        render={({ match }) => {
          const { id } = match.params;
          return <ShowPage id={id} />
        }}
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

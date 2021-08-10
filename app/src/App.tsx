import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import 'antd/dist/antd.css';
import './assets/styles/main.scss';

const Home = React.lazy(() => import('./weather/pages/home'));
const Search = React.lazy(() => import('./weather/pages/search'));
const Weather = React.lazy(() => import('./weather/pages/weather'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
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
      </Switch>
    </Suspense>
  </Router>
);

export default App;

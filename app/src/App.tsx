import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import 'antd/dist/antd.css';
import './assets/styles/main.scss';

const Home = React.lazy(() => import('./weather/pages/home'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route
          path="/"
          component={Home}
          exact
        />
      </Switch>
    </Suspense>
  </Router>
);

export default App;

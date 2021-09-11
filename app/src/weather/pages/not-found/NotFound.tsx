import React from 'react';
import { NavLink } from 'react-router-dom';

import WeatherLayout from 'weather/layouts/weather-layout';

import './index.scss';

const NotFound = () => (
  <WeatherLayout>
    <div className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <img className="not-found__moon" src="/img/icons/weather/Moon.svg" alt="" />
        <NavLink className="not-found__link" to="/">Return to home page</NavLink>
      </div>
    </div>
  </WeatherLayout>
);

export default NotFound;

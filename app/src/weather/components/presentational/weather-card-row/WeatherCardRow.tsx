import React from 'react';

import { Card } from 'antd';

import { CurrentWeather } from 'interfaces/weather';

import WeatherIcon from 'weather/components/presentational/weather-icon';

import './index.scss';

type Props = {
  data: CurrentWeather;
  className?: string;
};

const WeatherCardRow: React.FC<Props> = ({ data, className }) => (
  <Card.Grid className={`weather-card-row ${className}`}>
    <WeatherIcon className="weather-card-row__icon" icon={data.weather[0].icon} />
    <div className="weather-card-row__content">
      <div className="weather-card-row__left">
        <h3 className="weather-card-row__city">{data.name}</h3>
        <p className="weather-card-row__description">
          Feels like
          {' '}
          {Math.floor(data.main.feels_like)}
          {' '}
          C&deg;
        </p>
        <p>
          Wind
          {' '}
          {data.wind.speed}
          {' '}
          m/s
        </p>
      </div>
      <div className="weather-card-row__right">
        {Math.floor(data.main.temp)}
        &deg;
      </div>
    </div>
  </Card.Grid>
);

export default WeatherCardRow;
